#!/bin/bash
# Create systemd service for permanent uptime (Linux servers)
# Run this script on your production server to ensure 24/7 uptime

echo "⚙️  Setting up systemd service for permanent uptime"

# Get current directory
CURRENT_DIR=$(pwd)
USER_NAME=$(whoami)

# Create systemd service file
sudo tee /etc/systemd/system/fx-calculator.service << EOF
[Unit]
Description=FX Calculator Real-Time Trading System
After=network.target

[Service]
Type=simple
User=$USER_NAME
WorkingDirectory=$CURRENT_DIR
ExecStart=$CURRENT_DIR/production-startup.sh
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

# Environment variables
Environment=NODE_ENV=production
Environment=PYTHON_ENV=production

# Resource limits
LimitNOFILE=65536
MemoryMax=2G

[Install]
WantedBy=multi-user.target
EOF

# Reload systemd and enable service
sudo systemctl daemon-reload
sudo systemctl enable fx-calculator.service

echo "✅ Systemd service created: fx-calculator.service"
echo ""
echo "📋 Management commands:"
echo "  Start:   sudo systemctl start fx-calculator"
echo "  Stop:    sudo systemctl stop fx-calculator" 
echo "  Status:  sudo systemctl status fx-calculator"
echo "  Logs:    sudo journalctl -u fx-calculator -f"
echo "  Restart: sudo systemctl restart fx-calculator"
echo ""
echo "🚀 The service will now start automatically on boot!"
echo "🔄 It will automatically restart if it crashes!"
echo "💪 Your FX Calculator will stay up 24/7!"