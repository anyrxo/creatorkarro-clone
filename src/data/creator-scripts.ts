import { Slide, CreatorContent } from '@/types/creator-content'

export const creatorScripts: Record<string, CreatorContent> = {
    '1-1': {
        lessonId: '1-1',
        videoTitle: 'The Viral Hook Framework',
        slides: [
            {
                title: 'The 3-Second Rule',
                bullets: [
                    'Attention is the new currency',
                    'You have 3 seconds to stop the scroll',
                    'If you fail here, the rest of the video doesn\'t matter'
                ],
                visualCue: 'Show graph of viewer retention dropping off at 3s'
            },
            {
                title: 'The Pattern Interrupt',
                bullets: [
                    'Break the visual expectation',
                    'Movement, text, or sound',
                    'The "Wait, what?" moment'
                ],
                visualCue: 'Show 3 examples of viral hooks side-by-side'
            },
            {
                title: 'The Hook Generator Tool',
                bullets: [
                    'Don\'t rely on willpower',
                    'Use proven psychological triggers',
                    'Generate 50+ hooks in seconds'
                ],
                visualCue: '👉 DEMO: Open "Viral Hook Generator" tool'
            }
        ],
        script: `
**(Intro)**
"Welcome to Phase 1. This is arguably the most important lesson in the entire course. Why? Because if you can't stop the scroll, you don't exist.

We live in an attention economy. You are not competing with other creators in your niche. You are competing with Netflix, their best friend's text message, and a cat video. 

Today, I'm going to teach you the **Viral Hook Framework**. This is the exact system I used to gain 100k followers in 30 days."

**(Slide: The 3-Second Rule)**
"Here is the hard truth: You have exactly 3 seconds. Look at this retention graph. See that drop? That's where most people lose. 

If you don't hook them visually and verbally in those first 3 seconds, the algorithm assumes your content is trash and buries it.

So, how do we fix this?"

**(Slide: The Pattern Interrupt)**
"We use something called a **Pattern Interrupt**. 

When people scroll, they are in a trance. Your job is to snap them out of it. You can do this with:
1. **Movement**: Start the video in motion.
2. **Text**: A bold, controversial statement.
3. **Sound**: A sharp noise or unusual audio.

You need to create a 'Wait, what?' moment."

**(Slide: The Hook Generator Tool)**
"Now, I know writing hooks is hard. You stare at a blank page.

That's why I built the **Viral Hook Generator** for you.

👉 **ACTION:** Pause this video. Go to the Resources tab below and open the **Viral Hook Generator**.

I want you to select your niche, pick a 'Controversial' tone, and generate 5 hooks right now. 

Don't try to be creative yet. Just use the tool. It uses proven psychological frameworks like 'The Negative bias' and 'The Curiosity Gap'.

Go do that now, and I'll see you in the next lesson where we optimize your profile."
        `
    },
    '1-2': {
        lessonId: '1-2',
        videoTitle: 'Profile Optimization for Conversion',
        slides: [
            {
                title: 'Your Profile is Your Landing Page',
                bullets: [
                    'Followers = Traffic',
                    'Profile = Conversion',
                    'A confused mind says NO'
                ],
                visualCue: 'Show "Before vs After" of a optimized profile'
            },
            {
                title: 'The WHO / WHAT / WHY Formula',
                bullets: [
                    'WHO do you help?',
                    'WHAT do you help them achieve?',
                    'WHY should they trust you?'
                ],
                visualCue: 'Diagram of the Bio structure'
            },
            {
                title: 'The Bio Optimizer Tool',
                bullets: [
                    'Score your current bio',
                    'Get A/B test variations',
                    'Perfect your CTA'
                ],
                visualCue: '👉 DEMO: Open "Bio Optimizer" tool'
            }
        ],
        script: `
**(Intro)**
"Okay, you've hooked them. They clicked your username. Now they are looking at your profile.

This is the moment of truth. Do they hit 'Follow' or do they leave?

Your profile is not a biography. It is a **Landing Page**. Its only job is to convert a viewer into a follower."

**(Slide: The WHO / WHAT / WHY Formula)**
"Most people write bios like: 'Cat mom 🐱 | Coffee lover ☕ | Living my best life'.

That is useless. Nobody cares about you yet. They care about what you can do for THEM.

You need the **WHO / WHAT / WHY Formula**:
1. **WHO**: Who is this for? (e.g., 'Helping busy moms')
2. **WHAT**: What is the result? (e.g., 'Lose 10lbs in 30 days')
3. **WHY**: Social proof or Authority. (e.g., 'BS in Nutrition')

And finally, a Call to Action (CTA)."

**(Slide: The Bio Optimizer Tool)**
"To make this easy, I want you to use the **Bio Optimizer** tool.

👉 **ACTION:** Open the tool. Input your niche and your main promise.

It will generate 3 variations:
1. The Authority Bio
2. The Benefit-Driven Bio
3. The Minimalist Bio

Pick one, update your Instagram right now, and let's move on."
        `
    }
}
