import { renderPlayListHeader } from "./renderPlayListHeader.module.js"
import { renderTrack } from "./renderTrack.module.js"

export function renderPlayList(anyPlayList) {
    const playListIdEl = document.createElement("span")
    playListIdEl.append("ID : " + anyPlayList.playListId)
    document.body.append(playListIdEl)
    renderPlayListHeader(anyPlayList.playListInfo)
    for (let i = 0; i < anyPlayList.tracks.length; i++) {
        renderTrack(anyPlayList.tracks[i]);
    }
}