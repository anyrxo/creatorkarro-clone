// Add this to your browser console on the learning page to debug

// Get the Gamification context
console.log('=== QUEST DEBUG ===');

// Check if useGamification is providing data
const gamificationState = window.__GAMIFICATION_DEBUG__;
console.log('Gamification State:', gamificationState);

// Or add this to GamificationContext.tsx temporarily (line 110 after fetching quests):
console.log('Fetched quests:', questsData);
console.log('User ID from Clerk:', user.id);
console.log('Active quests from DB:', activeQuests);
console.log('Inserted quests:', insertedQuests);
