//data:
const playLists = [
    {
        playListId: "1",
        playListInfo: {
            title: "Hip-hop hits",
            coverImageUrl: "cover.avif",
            totalInfo: {
                totalTrackCount: 4,
                totaltracksDurationInSec: 733
            }
        },
        tracks: [
            {
                trackId: "11",
                trackCoverImageUrl: "eminem.jpg",
                artistName: "Eminem",
                trackTitle: "Rap God",
                trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: false
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
        ]
    },
    {
        playListId: "2",
        playListInfo: {
            title: "Hip-hop hits",
            coverImageUrl: "cover.avif",
            totalInfo: {
                totalTrackCount: 4,
                totaltracksDurationInSec: 733
            }
        },
        tracks: [
            {
                trackId: "11",
                trackCoverImageUrl: "eminem.jpg",
                artistName: "Eminem",
                trackTitle: "Rap God",
                trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: false
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
        ]
    },
    {
        playListId: "3",
        playListInfo: {
            title: "Hip-hop hits",
            coverImageUrl: "cover.avif",
            totalInfo: {
                totalTrackCount: 4,
                totaltracksDurationInSec: 733
            }
        },
        tracks: [
            {
                trackId: "11",
                trackCoverImageUrl: "eminem.jpg",
                artistName: "Eminem",
                trackTitle: "Rap God",
                trackFileUrl: "eminem_-_rap_god_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: false
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
            {
                trackId: "12",
                trackCoverImageUrl: "50cent.jpg",
                artistName: "50cent",
                trackTitle: "In da Club",
                trackFileUrl: "50cent_-_in_da_club_(muztune.me).mp3",
                trackDurationInSec: 1,
                isHot: true
            },
        ]
    },
] 



//render:

//header
// const playListTitleEl = document.createElement("h1");
// playListTitleEl.append(playList.playListInfo.title);
// document.body.append(playListTitleEl);

// const playListCoverEl = document.createElement("img");
// playListCoverEl.src = playList.playListInfo.coverImageUrl;
// playListCoverEl.style.width = "150px";
// playListCoverEl.style.height = "150px";
// document.body.append(playListCoverEl)

//tracks
// const tracksListEl = document.createElement("div")

//track 1
// const track_1_El = document.createElement("div")
// //track cover
// const cover_1 = document.createElement("img")
// cover_1.style.width = "50px"
// cover_1.src = playList.tracks[0].trackCoverImageUrl
// track_1_El.append(cover_1)
// //track audio
// const audio_1 = document.createElement("audio")
// audio_1.src = playList.tracks[0].trackFileUrl
// audio_1.controls = true
// track_1_El.append(audio_1)
// // document.body.append(track_1_El)
// //track description
// track_1_El.append(playList.tracks[0].artistName + ": " + playList.tracks[0].trackTitle)


//track 2
// const track_2_El = document.createElement("div")
// //track cover
// const cover_2 = document.createElement("img")
// cover_2.style.width = "50px"
// cover_2.src = playList.tracks[1].trackCoverImageUrl
// track_2_El.append(cover_2)
// //track audio
// const audio_2 = document.createElement("audio")
// audio_2.src = playList.tracks[1].trackFileUrl
// audio_2.controls = true
// track_2_El.append(audio_2)
// // document.body.append(track_1_El)
// //track description
// track_2_El.append(playList.tracks[1].artistName + ": " + playList.tracks[1].trackTitle)

// 
// tracksListEl.append(track_1_El, track_2_El)
// document.body.append(tracksListEl)






function renderPlayList(anyPlayList) {
    const playListIdEl = document.createElement("span")
    playListIdEl.append("ID : " + anyPlayList.playListId)
    document.body.append(playListIdEl)
    renderPlayListHeader(anyPlayList.playListInfo)
    for (let i = 0; i < anyPlayList.tracks.length; i++) {
        renderTrack(anyPlayList.tracks[i]);
    }
}

function renderPlayListHeader(anyPlayListInfo) {
    const playListTitleEl = document.createElement("h1");
    playListTitleEl.append(anyPlayListInfo.title);
    document.body.append(playListTitleEl);

    const playListCoverEl = document.createElement("img");
    playListCoverEl.src = anyPlayListInfo.coverImageUrl;
    playListCoverEl.style.width = "150px";
    playListCoverEl.style.height = "150px";
    document.body.append(playListCoverEl)

    const playListTotalTrackCountEl = document.createElement("span")
    playListTotalTrackCountEl.append("Tracks count : " + anyPlayListInfo.totalInfo.totalTrackCount)
    
    document.body.append(playListTotalTrackCountEl)
    
}
function renderTrack(anyTrack) {
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


for (let i = 0; i < playLists.length; i++) {
    renderPlayList(playLists[i]);
}


