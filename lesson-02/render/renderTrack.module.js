 export function renderTrack(anyTrack) {
    const trackEl = document.createElement("div")
    //track cover
    const cover = document.createElement("img")
    cover.style.width = "50px"
    cover.src = anyTrack.trackCoverImageUrl
    trackEl.append(cover)
    //track audio
    const audio = document.createElement("audio")
    audio.src = anyTrack.trackFileUrl
    audio.controls = true
    trackEl.append(audio)
    document.body.append(trackEl)
    //track description
    trackEl.append(anyTrack.artistName + ": " + anyTrack.trackTitle)
}