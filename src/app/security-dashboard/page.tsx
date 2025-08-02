'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface SecurityStats {
  totalViolations: number;
  blockedIPs: string[];
  recentViolations: Array<{
    timestamp: string;
    reason: string;
    userAgent: string;
    ip?: string;
    country?: string;
    url: string;
  }>;
  violationsByReason: Record<string, number>;
  violationsByCountry: Record<string, number>;
}

export default function SecurityDashboard() {
  const [stats, setStats] = useState<SecurityStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const authenticate = async () => {
    try {
      const response = await fetch(`/api/security/violation?token=${token}`);
      if (response.ok) {
        const data = await response.json();
        setStats(data);
        setAuthenticated(true);
        setError(null);
      } else {
        setError('Invalid token');
      }
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    if (!authenticated) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/security/violation?token=${token}`);
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (err) {
      console.error('Failed to refresh data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      // Auto-refresh every 30 seconds
      const interval = setInterval(refreshData, 30000);
      return () => clearInterval(interval);
    }
  }, [authenticated, refreshData]);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Card className="w-full max-w-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">🛡️ Security Dashboard</h1>
          <div className="space-y-4">
            <div>
              <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-2">
                Access Token
              </label>
              <input
                type="password"
                id="token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter security dashboard token"
              />
            </div>
            <button
              onClick={authenticate}
              disabled={!token || loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Access Dashboard'}
            </button>
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}
          </div>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading security data...</p>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-600">Failed to load security data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">🛡️ IImagined.ai Security Dashboard</h1>
          <button
            onClick={refreshData}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Refresh Data
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Violations</h3>
            <p className="text-3xl font-bold text-red-600">{stats.totalViolations}</p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Blocked IPs</h3>
            <p className="text-3xl font-bold text-orange-600">{stats.blockedIPs.length}</p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Protection Status</h3>
            <p className="text-lg font-bold text-green-600">🟢 ACTIVE</p>
          </Card>
        </div>

        {/* Recent Violations */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Security Violations</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Timestamp</th>
                  <th className="text-left py-2">IP Address</th>
                  <th className="text-left py-2">Country</th>
                  <th className="text-left py-2">Reason</th>
                  <th className="text-left py-2">User Agent</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentViolations.map((violation, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2">
                      {new Date(violation.timestamp).toLocaleString()}
                    </td>
                    <td className="py-2 font-mono text-sm">
                      {violation.ip || 'Unknown'}
                    </td>
                    <td className="py-2">
                      {violation.country || 'Unknown'}
                    </td>
                    <td className="py-2">
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                        {violation.reason}
                      </span>
                    </td>
                    <td className="py-2 max-w-xs truncate" title={violation.userAgent}>
                      {violation.userAgent.substring(0, 50)}...
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Violations by Reason */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Violations by Reason</h3>
            <div className="space-y-3">
              {Object.entries(stats.violationsByReason)
                .sort(([,a], [,b]) => b - a)
                .map(([reason, count]) => (
                  <div key={reason} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 truncate">{reason}</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                      {count}
                    </span>
                  </div>
                ))}
            </div>
          </Card>

          {/* Violations by Country */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Violations by Country</h3>
            <div className="space-y-3">
              {Object.entries(stats.violationsByCountry)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 10)
                .map(([country, count]) => (
                  <div key={country} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{country.toUpperCase()}</span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-semibold">
                      {count}
                    </span>
                  </div>
                ))}
            </div>
          </Card>
        </div>

        {/* Blocked IPs */}
        {stats.blockedIPs.length > 0 && (
          <Card className="p-6 mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Blocked IP Addresses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {stats.blockedIPs.map((ip, index) => (
                <div key={index} className="bg-red-100 text-red-800 px-3 py-2 rounded font-mono text-sm">
                  {ip}
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>🛡️ ORYANA Fortress Protection System Active</p>
          <p>Last updated: {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}