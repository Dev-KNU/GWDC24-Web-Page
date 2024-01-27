export class BackgroundIconItem {
    icon: string
    opacity: boolean
    top?: number
    left?: number
    right?: number

    constructor(icon: string, opacity: boolean = false) {
        this.icon = icon
        this.opacity = opacity
    }

    setPositionLeft(top: number, left: number) {
        this.top = top
        this.left = left
        return this
    }

    setPositionRight(top: number, right: number) {
        this.top = top
        this.right = right
        return this
    }
}