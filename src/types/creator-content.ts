export interface Slide {
    title: string
    bullets: string[]
    visualCue: string
}

export interface CreatorContent {
    lessonId: string
    videoTitle: string
    slides: Slide[]
    script: string
}
