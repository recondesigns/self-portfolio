export function setLinkDisplay(status) {
    if (status === 'active') {
        return `2px solid #303030`
    } else {
        return `none`
    }
}