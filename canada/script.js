(function(){
    var script = {
 "start": "this.playAudioList([this.audio_2AAAB055_3130_0F47_41B9_68D7F6DE0932]); this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_91C99F5E_9E2F_52D3_41D7_52EBB5F04E09.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "propagateClick": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "class": "Player",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 1,
 "verticalAlign": "top",
 "minWidth": 20,
 "definitions": [{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 9_3",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_8",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_8_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_8.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4873
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "media": "this.panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_camera"
  },
  {
   "media": "this.panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_camera"
  },
  {
   "media": "this.panorama_3A118009_3130_0ECF_41AD_777105188F7A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A118009_3130_0ECF_41AD_777105188F7A_camera"
  },
  {
   "media": "this.panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_camera"
  },
  {
   "media": "this.panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_camera"
  },
  {
   "media": "this.panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.panorama_28EE921F_3130_32C3_41A8_D70BD521B316",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_28EE921F_3130_32C3_41A8_D70BD521B316_camera"
  },
  {
   "media": "this.panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_camera"
  },
  {
   "media": "this.panorama_29239270_3130_135D_41C2_BE8F20440948",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_29239270_3130_135D_41C2_BE8F20440948_camera"
  },
  {
   "media": "this.panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_camera"
  },
  {
   "media": "this.panorama_291062D1_3130_F35F_41AA_CD2507357C95",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_291062D1_3130_F35F_41AA_CD2507357C95_camera"
  },
  {
   "media": "this.panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_camera"
  },
  {
   "media": "this.panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_camera"
  },
  {
   "media": "this.panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_camera"
  },
  {
   "media": "this.panorama_29122B07_3130_32C3_41C8_62E1DB5A854B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_camera"
  },
  {
   "media": "this.panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_camera"
  },
  {
   "media": "this.panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_camera"
  },
  {
   "media": "this.panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_camera"
  },
  {
   "media": "this.video_105869C1_31F0_71BF_4181_237EC7F01AB2",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 19, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 19)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_10786C93_31F0_77C3_41A0_F598896B060E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 20)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_116C7039_31F0_0ECF_41C5_9901276DE9AE",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 21, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 21)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_camera"
  },
  {
   "media": "this.panorama_1918652D_3130_36C7_41BA_2AD40D0E9663",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_camera"
  },
  {
   "media": "this.panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E",
   "camera": "this.panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "label": "Screenshot 2025-02-23 110957",
 "id": "map_203AA93D_3170_1EC7_418F_10B7EBA23D8B",
 "thumbnailUrl": "media/map_203AA93D_3170_1EC7_418F_10B7EBA23D8B_t.png",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "width": 827,
 "scaleMode": "fit_inside",
 "class": "Map",
 "initialZoomFactor": 1,
 "height": 1218,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_203AA93D_3170_1EC7_418F_10B7EBA23D8B.png",
    "width": 827,
    "class": "ImageResourceLevel",
    "height": 1218
   },
   {
    "url": "media/map_203AA93D_3170_1EC7_418F_10B7EBA23D8B_lq.png",
    "width": 210,
    "class": "ImageResourceLevel",
    "height": 310,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8C1F6056_9E2F_6ED3_41D4_60584DB91D44",
 "initialPosition": {
  "yaw": -154.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 3_2",
 "id": "photo_20FB63E8_3150_114D_41C7_A04FBC24D5AC",
 "thumbnailUrl": "media/photo_20FB63E8_3150_114D_41C7_A04FBC24D5AC_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20FB63E8_3150_114D_41C7_A04FBC24D5AC.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2435
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E69CF81_9E2F_5231_41DA_CAE494783DBE",
 "initialPosition": {
  "yaw": -97.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Image_3",
 "id": "photo_20F0070C_3150_12C5_41C2_8C84771153BC",
 "thumbnailUrl": "media/photo_20F0070C_3150_12C5_41C2_8C84771153BC_t.png",
 "width": 3409,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20F0070C_3150_12C5_41C2_8C84771153BC.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3365
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8C6DD05C_9E2F_6ED7_41D6_F2C9B246162A",
 "initialPosition": {
  "yaw": -147.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 36.87,
   "backwardYaw": -119.43,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B",
   "distance": 1
  },
  {
   "yaw": -53.09,
   "backwardYaw": 176.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA",
   "distance": 1
  },
  {
   "yaw": 0.95,
   "backwardYaw": -12.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_291062D1_3130_F35F_41AA_CD2507357C95",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25",
 "thumbnailUrl": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_t.jpg",
 "label": "Panorama",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2259F101_3170_0EBF_41B5_2B3D87A067A5",
  "this.overlay_2577668B_3170_13C3_41B4_FDF3C1B8D539",
  "this.overlay_1EDA4A50_32D0_135D_41BC_7AF7220FC146"
 ]
},
{
 "label": "Clip 1",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_105869C1_31F0_71BF_4181_237EC7F01AB2_t.jpg",
 "width": 2560,
 "loop": false,
 "id": "video_105869C1_31F0_71BF_4181_237EC7F01AB2",
 "class": "Video",
 "height": 1438,
 "video": {
  "width": 2560,
  "class": "VideoResource",
  "height": 1438,
  "mp4Url": "media/video_105869C1_31F0_71BF_4181_237EC7F01AB2.mp4"
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 13_1",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_12",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_12_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_12.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4873
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 5_2",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_4",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_4_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_4.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 5760
},
{
 "adjacentPanoramas": [
  {
   "yaw": 47.87,
   "backwardYaw": 141.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7",
 "thumbnailUrl": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_t.jpg",
 "label": "8",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_132E54B8_31F0_F7CD_41BB_C99BE4B575B9"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E90FFA5_9E2F_5271_41E1_869FC11584EF",
 "initialPosition": {
  "yaw": -33.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8EDD3FBE_9E2F_5253_41DD_C9AD06DA7B34",
 "initialPosition": {
  "yaw": 106.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 30(1)",
 "id": "photo_20141B5B_3170_1143_41BE_8BC0265BAC28",
 "thumbnailUrl": "media/photo_20141B5B_3170_1143_41BE_8BC0265BAC28_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20141B5B_3170_1143_41BE_8BC0265BAC28.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2435
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 36_1",
 "id": "photo_20E04999_3170_11CF_41A1_A497B9D6A6FF",
 "thumbnailUrl": "media/photo_20E04999_3170_11CF_41A1_A497B9D6A6FF_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20E04999_3170_11CF_41A1_A497B9D6A6FF.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2435
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 28(1)",
 "id": "photo_20CD562E_3170_12C5_41C8_3D9C070A9267",
 "thumbnailUrl": "media/photo_20CD562E_3170_12C5_41C8_3D9C070A9267_t.png",
 "width": 2793,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20CD562E_3170_12C5_41C8_3D9C070A9267.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2053
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F575FFA_9E2F_51D3_41E3_983DD0DD145B",
 "initialPosition": {
  "yaw": 179.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_20968BED_3170_1147_4195_4CEBC70845BA",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_91C83F5E_9E2F_52D3_41C7_DD48A5A618B5",
 "class": "PlayList"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -141.77,
   "backwardYaw": 49.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1918652D_3130_36C7_41BA_2AD40D0E9663",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E",
 "thumbnailUrl": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_t.jpg",
 "label": "11",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_18B1FD2A_3130_F6CD_41C4_4EF25850A5C8"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 4_3(1)",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_3",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_3_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_3.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4869
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -87.58,
   "backwardYaw": -36.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE",
   "distance": 1
  },
  {
   "yaw": 49.61,
   "backwardYaw": -141.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_29122B07_3130_32C3_41C8_62E1DB5A854B"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_1918652D_3130_36C7_41BA_2AD40D0E9663",
 "thumbnailUrl": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_t.jpg",
 "label": "Panorama(6)",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_197E15A1_3130_31FF_4186_58608B7E49BE",
  "this.overlay_18FD2D3F_3130_16C3_41C7_38551DC8666A",
  "this.overlay_1C8CDDE2_3130_117D_4186_7C721BB206CE"
 ]
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 10_4",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_9",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_9_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_9.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4869
},
{
 "items": [
  {
   "media": "this.panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_camera"
  },
  {
   "media": "this.panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_camera"
  },
  {
   "media": "this.panorama_3A118009_3130_0ECF_41AD_777105188F7A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A118009_3130_0ECF_41AD_777105188F7A_camera"
  },
  {
   "media": "this.panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_camera"
  },
  {
   "media": "this.panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_camera"
  },
  {
   "media": "this.panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.panorama_28EE921F_3130_32C3_41A8_D70BD521B316",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_28EE921F_3130_32C3_41A8_D70BD521B316_camera"
  },
  {
   "media": "this.panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_camera"
  },
  {
   "media": "this.panorama_29239270_3130_135D_41C2_BE8F20440948",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_29239270_3130_135D_41C2_BE8F20440948_camera"
  },
  {
   "media": "this.panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_camera"
  },
  {
   "media": "this.panorama_291062D1_3130_F35F_41AA_CD2507357C95",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_291062D1_3130_F35F_41AA_CD2507357C95_camera"
  },
  {
   "media": "this.panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_camera"
  },
  {
   "media": "this.panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_camera"
  },
  {
   "media": "this.panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_camera"
  },
  {
   "media": "this.panorama_29122B07_3130_32C3_41C8_62E1DB5A854B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_camera"
  },
  {
   "media": "this.panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_camera"
  },
  {
   "media": "this.panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_camera"
  },
  {
   "media": "this.panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_camera"
  },
  {
   "media": "this.video_105869C1_31F0_71BF_4181_237EC7F01AB2",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_10786C93_31F0_77C3_41A0_F598896B060E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.video_116C7039_31F0_0ECF_41C5_9901276DE9AE",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21)",
   "class": "VideoPlayListItem",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "media": "this.panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_camera"
  },
  {
   "media": "this.panorama_1918652D_3130_36C7_41BA_2AD40D0E9663",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_camera"
  },
  {
   "media": "this.panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8EB35F9B_9E2F_5251_41DC_84996FB32693",
 "initialPosition": {
  "yaw": 38.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 2_2",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_1",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_1_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_1.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4320
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 34_1",
 "id": "photo_20F8B4C6_3170_3745_41BA_371BCDCF7C66",
 "thumbnailUrl": "media/photo_20F8B4C6_3170_3745_41BA_371BCDCF7C66_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20F8B4C6_3170_3745_41BA_371BCDCF7C66.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2437
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8EA50F96_9E2F_5253_41E1_436E0E0BCAFF",
 "initialPosition": {
  "yaw": 143.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8FC1D038_9E2F_6E5F_41E3_961421BD982C",
 "initialPosition": {
  "yaw": 167.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 69.23,
   "backwardYaw": -32.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_291062D1_3130_F35F_41AA_CD2507357C95",
   "distance": 1
  },
  {
   "yaw": -73.87,
   "backwardYaw": 146.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_28EE921F_3130_32C3_41A8_D70BD521B316",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6",
 "thumbnailUrl": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_t.jpg",
 "label": "Panorama",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2B1CA4F0_31D0_175D_4169_B4DCA2E0F964",
  "this.overlay_2A94FE71_31D0_135F_41A8_BAD0F06B00D5"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_28EE921F_3130_32C3_41A8_D70BD521B316_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -171.72,
   "backwardYaw": -0.82,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B",
   "distance": 1
  },
  {
   "yaw": -90.29,
   "backwardYaw": 90.65,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A118009_3130_0ECF_41AD_777105188F7A",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240",
 "thumbnailUrl": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_t.jpg",
 "label": "Panorama_3",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_25DBC799_3170_11CF_41C7_C7E97AD817B3",
  "this.overlay_27120616_3170_32C5_41C2_4BC8B157DE64"
 ]
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 4_1",
 "id": "photo_209A6DA7_3150_11C3_419D_0A3B31AE4FA1",
 "thumbnailUrl": "media/photo_209A6DA7_3150_11C3_419D_0A3B31AE4FA1_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_209A6DA7_3150_11C3_419D_0A3B31AE4FA1.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2435
},
{
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E552F91_9E2F_5251_41E2_8153248EB586",
 "initialPosition": {
  "yaw": -135.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E183F7C_9E2F_52D7_41E1_5EDD9B2C1C87",
 "initialPosition": {
  "yaw": 175.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E833FA0_9E2F_526F_41C0_E326025BFDFA",
 "initialPosition": {
  "yaw": 147.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8EFCEFB4_9E2F_5257_41DD_428724FB00A2",
 "initialPosition": {
  "yaw": 89.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 52.39,
   "backwardYaw": 32.76,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44",
   "distance": 1
  },
  {
   "yaw": -36.01,
   "backwardYaw": -66.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_29239270_3130_135D_41C2_BE8F20440948",
 "thumbnailUrl": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_t.jpg",
 "label": "Panorama(3)",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2CC500CA_31D0_0F4D_41BF_3FF4EE8544C0",
  "this.overlay_2CF53A6C_31D0_1345_41AF_0A3EE2193464"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3A118009_3130_0ECF_41AD_777105188F7A_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E77AF86_9E2F_5233_41DD_8997917E894C",
 "initialPosition": {
  "yaw": -143.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 7(1)",
 "id": "photo_20EA4C6F_3170_1743_41C5_DBAD7908758C",
 "thumbnailUrl": "media/photo_20EA4C6F_3170_1743_41C5_DBAD7908758C_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20EA4C6F_3170_1743_41C5_DBAD7908758C.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2435
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8ECCAFB9_9E2F_5251_41E3_066AE45BF84C",
 "initialPosition": {
  "yaw": 92.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_291062D1_3130_F35F_41AA_CD2507357C95_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8FD0303D_9E2F_6E51_41E1_88875D477DE5",
 "initialPosition": {
  "yaw": 111.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 21",
 "id": "photo_20D690E5_3170_0F47_41BA_C4B1DCF43414",
 "thumbnailUrl": "media/photo_20D690E5_3170_0F47_41BA_C4B1DCF43414_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20D690E5_3170_0F47_41BA_C4B1DCF43414.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2880
},
{
 "adjacentPanoramas": [
  {
   "yaw": -119.43,
   "backwardYaw": 36.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25",
   "distance": 1
  },
  {
   "yaw": -0.82,
   "backwardYaw": -171.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B",
 "thumbnailUrl": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_t.jpg",
 "label": "Panorama_5",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_25A0D770_3170_115D_4165_D9AE8FF485D8",
  "this.overlay_270D3881_3170_1FBF_41B5_45975DBF0DDE"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8C4CC067_9E2F_6EF1_41D5_BC98904B8255",
 "initialPosition": {
  "yaw": 126.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 8(1)",
 "id": "photo_203287DC_3170_3145_41B7_F25A731411DC",
 "thumbnailUrl": "media/photo_203287DC_3170_3145_41B7_F25A731411DC_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_203287DC_3170_3145_41B7_F25A731411DC.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2435
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F1B1FD3_9E2F_51D1_41D6_2E553ADAD27D",
 "initialPosition": {
  "yaw": 26.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8EE14FAA_9E2F_5273_41D8_6E9D6E0EA93F",
 "initialPosition": {
  "yaw": 95.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E0B1F77_9E2F_52D1_41D5_1209702964A3",
 "initialPosition": {
  "yaw": 143.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8C3F104C_9E2F_6E37_41D2_1C63C688F952",
 "initialPosition": {
  "yaw": -132.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_203AA93D_3170_1EC7_418F_10B7EBA23D8B",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_91C81F5E_9E2F_52D3_41D4_AACD1FB99D6B",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 44.26,
   "backwardYaw": -100.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_29122B07_3130_32C3_41C8_62E1DB5A854B",
 "thumbnailUrl": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_t.jpg",
 "label": "Panorama_27",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1541B2BB_3130_73C3_41A0_7BE526349AD5"
 ]
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 1",
 "id": "photo_20BAA4B5_3150_37C7_41B1_30D504C0970F",
 "thumbnailUrl": "media/photo_20BAA4B5_3150_37C7_41B1_30D504C0970F_t.png",
 "width": 1775,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20BAA4B5_3150_37C7_41B1_30D504C0970F.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3156
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8C7D9060_9E2F_6EEF_41CE_44CFA3C145BF",
 "initialPosition": {
  "yaw": 113.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "maximumZoomFactor": 1.2,
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "label": "Screenshot 2025-02-23 111113",
 "id": "map_20968BED_3170_1147_4195_4CEBC70845BA",
 "thumbnailUrl": "media/map_20968BED_3170_1147_4195_4CEBC70845BA_t.png",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "width": 554,
 "scaleMode": "fit_inside",
 "class": "Map",
 "initialZoomFactor": 1,
 "height": 451,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_20968BED_3170_1147_4195_4CEBC70845BA.png",
    "width": 554,
    "class": "ImageResourceLevel",
    "height": 451
   },
   {
    "url": "media/map_20968BED_3170_1147_4195_4CEBC70845BA_lq.png",
    "width": 283,
    "class": "ImageResourceLevel",
    "height": 231,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "adjacentPanoramas": [
  {
   "yaw": 73.18,
   "backwardYaw": -84.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002",
   "distance": 1
  },
  {
   "yaw": -92.22,
   "backwardYaw": 4.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA",
   "distance": 1
  },
  {
   "yaw": 90.65,
   "backwardYaw": -90.29,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3A118009_3130_0ECF_41AD_777105188F7A",
 "thumbnailUrl": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_t.jpg",
 "label": "Panorama_2",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_277A6A98_3170_33CD_41AB_81D8396F5106",
  "this.overlay_25988270_3170_335D_41C7_E4372FE16000",
  "this.overlay_259EDA31_3170_12DF_41B5_5DA1DCDD82E5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 146.68,
   "backwardYaw": -73.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6",
   "distance": 1
  },
  {
   "yaw": 75.48,
   "backwardYaw": 151.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_28EE921F_3130_32C3_41A8_D70BD521B316",
 "thumbnailUrl": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_t.jpg",
 "label": "Panorama(1)",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2AB4FF52_31D0_115D_41C6_7C08925133C5",
  "this.overlay_2A121AC1_31D0_F3BF_41C0_E78CED4F03A0"
 ]
},
{
 "label": "Clip 3",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_116C7039_31F0_0ECF_41C5_9901276DE9AE_t.jpg",
 "width": 2560,
 "loop": false,
 "id": "video_116C7039_31F0_0ECF_41C5_9901276DE9AE",
 "class": "Video",
 "height": 1438,
 "video": {
  "width": 2560,
  "class": "VideoResource",
  "height": 1438,
  "mp4Url": "media/video_116C7039_31F0_0ECF_41C5_9901276DE9AE.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 141.47,
   "backwardYaw": 47.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7",
   "distance": 1
  },
  {
   "yaw": -68.13,
   "backwardYaw": 36.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759",
 "thumbnailUrl": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_t.jpg",
 "label": "Panorama_21",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2EC8A13A_31F0_0ECD_41C4_696E86871D24",
  "this.overlay_2E084AA1_31F0_33FF_41C2_C88B30C83410"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 25.12,
   "backwardYaw": -153.92,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C",
   "distance": 1
  },
  {
   "yaw": -12.16,
   "backwardYaw": 0.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25",
   "distance": 1
  },
  {
   "yaw": -32.36,
   "backwardYaw": 69.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6",
   "distance": 1
  },
  {
   "yaw": -4.75,
   "backwardYaw": 162.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_291062D1_3130_F35F_41AA_CD2507357C95",
 "thumbnailUrl": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_t.jpg",
 "label": "Panorama_13",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_28DE397F_3130_1143_41BF_BC2652E7DD7F",
  "this.overlay_28952917_3130_7EC3_41B3_6C4A6AB58945",
  "this.overlay_2B5BEDB4_3130_11C5_41C7_4B13E5337266",
  "this.overlay_286718B8_312F_FFCD_41B2_DB1E0656EEDD"
 ]
},
{
 "class": "PhotoAlbum",
 "label": "VR_Demo",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_t.png",
 "playList": "this.album_200D204D_3150_0F47_41AC_F1716095A921_AlbumPlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8FDE8042_9E2F_6E33_41BA_4C222FF8C598",
 "initialPosition": {
  "yaw": -113.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8FF3B033_9E2F_6E51_41E2_3F5A386A8E3D",
 "initialPosition": {
  "yaw": -3.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F922025_9E2F_6E71_41D3_24FBCB3D9470",
 "initialPosition": {
  "yaw": -104.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 7_3",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_6",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_6_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_6.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 5760
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F2AFFC3_9E2F_5231_41D6_7FBFE4D23C08",
 "initialPosition": {
  "yaw": -28.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ]
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 9",
 "id": "photo_207FE989_3170_11CF_4194_F7CF0B9E8A59",
 "thumbnailUrl": "media/photo_207FE989_3170_11CF_4194_F7CF0B9E8A59_t.png",
 "width": 3031,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_207FE989_3170_11CF_4194_F7CF0B9E8A59.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2821
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8E470F8C_9E2F_5237_41E3_51B08341C1C8",
 "initialPosition": {
  "yaw": 8.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F08CFCE_9E2F_5233_419E_CE25ECBB88F2",
 "initialPosition": {
  "yaw": -130.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_203AA93D_3170_1EC7_418F_10B7EBA23D8B",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_91C99F5E_9E2F_52D3_41D7_52EBB5F04E09",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 32.76,
   "backwardYaw": 52.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_29239270_3130_135D_41C2_BE8F20440948",
   "distance": 1
  },
  {
   "yaw": 151.72,
   "backwardYaw": 75.48,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_28EE921F_3130_32C3_41A8_D70BD521B316",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44",
 "thumbnailUrl": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_t.jpg",
 "label": "Panorama(2)",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2A56DA9A_31D0_13CD_41BA_F81116EF8BAE",
  "this.overlay_2C90FB7B_31D0_F143_41C7_D05A224E5AB4"
 ]
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 35_1",
 "id": "photo_20E08EB8_3170_33CD_41C3_1335A65FD146",
 "thumbnailUrl": "media/photo_20E08EB8_3170_33CD_41C3_1335A65FD146_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20E08EB8_3170_33CD_41C3_1335A65FD146.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2435
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F46EFF0_9E2F_51EF_41DF_646A03999612",
 "initialPosition": {
  "yaw": -17.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 1_2",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_0",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_0_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_0.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4869
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE"
  },
  {
   "yaw": -66.75,
   "backwardYaw": -36.01,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_29239270_3130_135D_41C2_BE8F20440948",
   "distance": 1
  },
  {
   "yaw": 162.31,
   "backwardYaw": -4.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_291062D1_3130_F35F_41AA_CD2507357C95",
   "distance": 1
  },
  {
   "yaw": 66.8,
   "backwardYaw": 82.26,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9",
 "thumbnailUrl": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_t.jpg",
 "label": "5",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2D540E03_31D0_32C3_4175_FE41C169C0ED",
  "this.overlay_2CED1BB2_31D1_F1DD_41B1_EB6CE5033BFC",
  "this.overlay_2C7723B9_31D0_11CF_41C1_D77908B1D014",
  "this.overlay_2F92582A_31D0_7ECD_41C3_8ED00EF17C79"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F692FE0_9E2F_51EF_41E0_2CDED33A8BE1",
 "initialPosition": {
  "yaw": -179.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 5_1",
 "id": "photo_20FB289E_316F_FFC5_41AD_C1851E206C5E",
 "thumbnailUrl": "media/photo_20FB289E_316F_FFC5_41AD_C1851E206C5E_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20FB289E_316F_FFC5_41AD_C1851E206C5E.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2435
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8C0F4052_9E2F_6ED3_4199_D23FB7AC6103",
 "initialPosition": {
  "yaw": -143.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Image_2",
 "id": "photo_200993A3_3150_11C3_41BC_5D28FEAAAE2B",
 "thumbnailUrl": "media/photo_200993A3_3150_11C3_41BC_5D28FEAAAE2B_t.png",
 "width": 1144,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_200993A3_3150_11C3_41BC_5D28FEAAAE2B.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2021
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F76CFEA_9E2F_51F3_41E0_C0CFE09F1A03",
 "initialPosition": {
  "yaw": -110.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F82C01A_9E2F_6E53_41C3_1E8AECC80721",
 "initialPosition": {
  "yaw": -127.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8F3AAFC8_9E2F_523F_41C6_E7EACD04B849",
 "initialPosition": {
  "yaw": 79.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -153.92,
   "backwardYaw": 25.12,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_291062D1_3130_F35F_41AA_CD2507357C95",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C",
 "thumbnailUrl": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_t.jpg",
 "label": "Panorama(4)",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_131DEF0A_31D0_72CD_41AD_1F54A9A90B05"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8C5CE06C_9E2F_6EF7_41C2_D4435D78916A",
 "initialPosition": {
  "yaw": 87.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 2_2",
 "id": "photo_204DEA71_3150_335F_41AC_EEE815050000",
 "thumbnailUrl": "media/photo_204DEA71_3150_335F_41AC_EEE815050000_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_204DEA71_3150_335F_41AC_EEE815050000.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2435
},
{
 "label": "Clip 2",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_10786C93_31F0_77C3_41A0_F598896B060E_t.jpg",
 "width": 2560,
 "loop": false,
 "id": "video_10786C93_31F0_77C3_41A0_F598896B060E",
 "class": "Video",
 "height": 1438,
 "video": {
  "width": 2560,
  "class": "VideoResource",
  "height": 1438,
  "mp4Url": "media/video_10786C93_31F0_77C3_41A0_F598896B060E.mp4"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B"
  },
  {
   "yaw": -84.9,
   "backwardYaw": 73.18,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A118009_3130_0ECF_41AD_777105188F7A",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002",
 "thumbnailUrl": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_t.jpg",
 "label": "Panorama_4",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_25847288_3170_F3CD_41C3_A2E2D6813A61",
  "this.overlay_24AF7C86_3170_17C5_41A7_5E553A48B640"
 ]
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_2AAAB055_3130_0F47_41B9_68D7F6DE0932.mp3",
  "oggUrl": "media/audio_2AAAB055_3130_0F47_41B9_68D7F6DE0932.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_2AAAB055_3130_0F47_41B9_68D7F6DE0932",
 "data": {
  "label": "Ludovico Einaudi - Nuvole Bianche"
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 22",
 "id": "photo_20FE8C99_3170_77CF_41BB_5201EB753340",
 "thumbnailUrl": "media/photo_20FE8C99_3170_77CF_41BB_5201EB753340_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20FE8C99_3170_77CF_41BB_5201EB753340.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2435
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 8_3",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_7",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_7_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_7.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4869
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_29385197_3150_11C3_4196_5ECF19781362.mp3",
  "oggUrl": "media/audio_29385197_3150_11C3_4196_5ECF19781362.ogg",
  "class": "AudioResource"
 },
 "class": "MediaAudio",
 "id": "audio_29385197_3150_11C3_4196_5ECF19781362",
 "data": {
  "label": "Ludovico Einaudi - Nuvole Bianche"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": 36.06,
   "backwardYaw": -68.13,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759",
   "distance": 1
  },
  {
   "yaw": 82.26,
   "backwardYaw": 66.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0",
 "thumbnailUrl": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_t.jpg",
 "label": "Panorama_19",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2FAC8D5B_31F0_1143_41C5_BEEF27A862F2",
  "this.overlay_2E14DEE1_31F0_137F_4190_0EF514C7EBA7"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_20968BED_3170_1147_4195_4CEBC70845BA",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_91C9DF5E_9E2F_52D3_41E1_8B39B9DB8540",
 "class": "PlayList"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 37",
 "id": "photo_20C0379C_3170_F1C5_41C5_1BD94F25CC61",
 "thumbnailUrl": "media/photo_20C0379C_3170_F1C5_41C5_1BD94F25CC61_t.png",
 "width": 3082,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20C0379C_3170_F1C5_41C5_1BD94F25CC61.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2437
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 11_1",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_10",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_10_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_10.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4869
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 6_1",
 "id": "photo_20CC427E_3170_1345_4195_ACDCDA658DBD",
 "thumbnailUrl": "media/photo_20CC427E_3170_1345_4195_ACDCDA658DBD_t.png",
 "width": 3840,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_20CC427E_3170_1345_4195_ACDCDA658DBD.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2435
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8FA73005_9E2F_6E31_419D_35A27F2DAABD",
 "initialPosition": {
  "yaw": -89.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8EEEEFAF_9E2F_5271_41C3_0CF2816B7152",
 "initialPosition": {
  "yaw": -175.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -36.23,
   "backwardYaw": -87.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1918652D_3130_36C7_41BA_2AD40D0E9663",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE",
 "thumbnailUrl": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_t.jpg",
 "label": "Panorama(5)",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_14AECD44_3130_1145_41C7_9FCD32E1BF6B"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8FE3502B_9E2F_6E71_41C8_488F715157DA",
 "initialPosition": {
  "yaw": 60.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -100.78,
   "backwardYaw": 44.26,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_29122B07_3130_32C3_41C8_62E1DB5A854B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E",
 "thumbnailUrl": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_t.jpg",
 "label": "Panorama_26",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1472DEE1_3130_137F_418D_BF424511FE58",
  "this.overlay_142B769A_3130_13CD_41C8_58FE71343C54"
 ]
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 12_1",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_11",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_11_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_11.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4873
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer"
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 3_3(1)",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_2",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_2_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_2.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4873
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B"
  },
  {
   "yaw": 176.84,
   "backwardYaw": -53.09,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25",
   "distance": 1
  },
  {
   "yaw": 4.22,
   "backwardYaw": -92.22,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3A118009_3130_0ECF_41AD_777105188F7A",
   "distance": 1
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA",
 "thumbnailUrl": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_t.jpg",
 "label": "Panorama_1",
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/f/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/u/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/b/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/d/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/l/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/r/0/{row}_{column}.jpg",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_22D2D1CA_3170_114D_41C3_452C309BFC4E",
  "this.overlay_25F6AE8A_3170_13CD_41C2_5FCF8BE604F2"
 ]
},
{
 "duration": 5000,
 "class": "Photo",
 "label": "Scene 6_3",
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_5",
 "thumbnailUrl": "media/album_200D204D_3150_0F47_41AC_F1716095A921_5_t.png",
 "width": 7680,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_200D204D_3150_0F47_41AC_F1716095A921_5.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4873
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8C2ED048_9E2F_6E3F_41E1_6FB4411EE5E2",
 "initialPosition": {
  "yaw": -106.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_29239270_3130_135D_41C2_BE8F20440948_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "id": "camera_8FB2D010_9E2F_6E2F_41DB_4F33435E3E2C",
 "initialPosition": {
  "yaw": -38.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 7,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "right": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "bottom": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "paddingTop": 0,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "height": 641,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "overflow": "visible",
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": 573,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": 15,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "height": 133,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--STICKER"
 }
},
{
 "overflow": "visible",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 0.64,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "borderRadius": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "scrollBarColor": "#000000",
 "bottom": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "layout": "absolute",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "height": 118,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "--MENU"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--INFO photo"
 },
 "creationPolicy": "inAdvance"
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--INFO photoalbum"
 },
 "creationPolicy": "inAdvance"
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "creationPolicy": "inAdvance"
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--LOCATION"
 },
 "creationPolicy": "inAdvance"
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "creationPolicy": "inAdvance"
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "creationPolicy": "inAdvance"
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "creationPolicy": "inAdvance"
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "scrollBarColor": "#04A3E1",
 "bottom": "0%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "class": "Container",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "data": {
  "name": "--REALTOR"
 },
 "creationPolicy": "inAdvance"
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "toggle",
 "paddingTop": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "toggle",
 "click": "if(this.getGlobalAudio(this.audio_29385197_3150_11C3_4196_5ECF19781362).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_29385197_3150_11C3_4196_5ECF19781362); } else { var src = this.playGlobalAudio(this.audio_29385197_3150_11C3_4196_5ECF19781362); }",
 "paddingTop": 0,
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B, this.camera_8FE3502B_9E2F_6E71_41C8_488F715157DA); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.67,
   "image": "this.AnimatedImageResource_27CB8164_3170_3145_41BB_F2C48B3957C5",
   "yaw": 36.87,
   "pitch": -8.09,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2259F101_3170_0EBF_41B5_2B3D87A067A5",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.67,
   "yaw": 36.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA, this.camera_8FF3B033_9E2F_6E51_41E2_3F5A386A8E3D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.68,
   "image": "this.AnimatedImageResource_27C80164_3170_3145_41C7_65A34632E9E7",
   "yaw": -53.09,
   "pitch": -7.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2577668B_3170_13C3_41B4_FDF3C1B8D539",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.68,
   "yaw": -53.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_291062D1_3130_F35F_41AA_CD2507357C95, this.camera_8FC1D038_9E2F_6E5F_41E3_961421BD982C); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.67,
   "image": "this.AnimatedImageResource_06D03B56_32D0_1145_418C_7C46BC5D1E6F",
   "yaw": 0.95,
   "pitch": -7.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_1EDA4A50_32D0_135D_41BC_7AF7220FC146",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.67,
   "yaw": 0.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759, this.camera_8FB2D010_9E2F_6E2F_41DB_4F33435E3E2C); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 15.22,
   "image": "this.AnimatedImageResource_1F27C70A_3130_72CD_416F_02861C9EFB7D",
   "yaw": 47.87,
   "pitch": -40.76,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_132E54B8_31F0_F7CD_41BB_C99BE4B575B9",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.22,
   "yaw": 47.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1918652D_3130_36C7_41BA_2AD40D0E9663, this.camera_8F08CFCE_9E2F_5233_419E_CE25ECBB88F2); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 13.16,
   "image": "this.AnimatedImageResource_1B4822FC_3130_1345_41AC_94B66C46A22C",
   "yaw": -141.77,
   "pitch": -49.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_18B1FD2A_3130_F6CD_41C4_4EF25850A5C8",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.16,
   "yaw": -141.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -49.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE, this.camera_8EA50F96_9E2F_5253_41E1_436E0E0BCAFF); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 18.95,
   "image": "this.AnimatedImageResource_1BFB1DF8_32D1_F14D_41BD_C605BA6CC215",
   "yaw": -87.58,
   "pitch": -19.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_197E15A1_3130_31FF_4186_58608B7E49BE",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.95,
   "yaw": -87.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E, this.camera_8EB35F9B_9E2F_5251_41DC_84996FB32693); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 19.2,
   "image": "this.AnimatedImageResource_1F19270A_3130_72CD_41C3_8B89B3E8D536",
   "yaw": 49.61,
   "pitch": -17.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_18FD2D3F_3130_16C3_41C7_38551DC8666A",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.2,
   "yaw": 49.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 19.22,
   "image": "this.AnimatedImageResource_1BF8CDF8_32D1_F14D_41A9_B32E5AB339E9",
   "yaw": -55.28,
   "pitch": -16.97,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_1C8CDDE2_3130_117D_4186_7C721BB206CE",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.22,
   "yaw": -55.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_291062D1_3130_F35F_41AA_CD2507357C95, this.camera_8E833FA0_9E2F_526F_41C0_E326025BFDFA); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 18.01,
   "image": "this.AnimatedImageResource_171E4823_31F0_1EC3_41A8_D8A6A0994ABE",
   "yaw": 69.23,
   "pitch": -26.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2B1CA4F0_31D0_175D_4169_B4DCA2E0F964",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.01,
   "yaw": 69.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_28EE921F_3130_32C3_41A8_D70BD521B316, this.camera_8E90FFA5_9E2F_5271_41E1_869FC11584EF); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 19.47,
   "image": "this.AnimatedImageResource_171F9824_31F0_1EC5_41A6_861DDFD95A31",
   "yaw": -73.87,
   "pitch": -14.37,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2A94FE71_31D0_135F_41A8_BAD0F06B00D5",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.47,
   "yaw": -73.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A118009_3130_0ECF_41AD_777105188F7A, this.camera_8FA73005_9E2F_6E31_419D_35A27F2DAABD); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.52,
   "image": "this.AnimatedImageResource_27C9E164_3170_3145_41C8_A7520D8D9107",
   "yaw": -90.29,
   "pitch": -5.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_25DBC799_3170_11CF_41C7_C7E97AD817B3",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.52,
   "yaw": -90.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B, this.camera_8F575FFA_9E2F_51D3_41E3_983DD0DD145B); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.66,
   "image": "this.AnimatedImageResource_27C62165_3170_3147_41A9_68F1E3CC17B6",
   "yaw": -171.72,
   "pitch": -8.69,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_27120616_3170_32C5_41C2_4BC8B157DE64",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.66,
   "yaw": -171.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9, this.camera_8C7D9060_9E2F_6EEF_41CE_44CFA3C145BF); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 18.89,
   "image": "this.AnimatedImageResource_171E8823_31F0_1EC3_41A1_5E80AAF6445E",
   "yaw": -36.01,
   "pitch": -19.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2CC500CA_31D0_0F4D_41BF_3FF4EE8544C0",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.89,
   "yaw": -36.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44, this.camera_8C6DD05C_9E2F_6ED7_41D6_F2C9B246162A); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 18.91,
   "image": "this.AnimatedImageResource_171EE823_31F0_1EC3_419A_DD1705EDEADD",
   "yaw": 52.39,
   "pitch": -19.75,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2CF53A6C_31D0_1345_41AF_0A3EE2193464",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.91,
   "yaw": 52.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240, this.camera_8E470F8C_9E2F_5237_41E3_51B08341C1C8); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.71,
   "image": "this.AnimatedImageResource_27C72165_3170_3147_41C5_2B8F779E5E3C",
   "yaw": -0.82,
   "pitch": -3.75,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_25A0D770_3170_115D_4165_D9AE8FF485D8",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.71,
   "yaw": -0.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25, this.camera_8E77AF86_9E2F_5233_41DD_8997917E894C); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.65,
   "image": "this.AnimatedImageResource_27C79165_3170_3147_41B0_232266DE4079",
   "yaw": -119.43,
   "pitch": -9.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_270D3881_3170_1FBF_41B5_45975DBF0DDE",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.65,
   "yaw": -119.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E, this.camera_8F3AAFC8_9E2F_523F_41C6_E7EACD04B849); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 14.1,
   "image": "this.AnimatedImageResource_1F242709_3130_72CF_41BA_4FFEE6539FB6",
   "yaw": 44.26,
   "pitch": -17.37,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_1541B2BB_3130_73C3_41A0_7BE526349AD5",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.1,
   "yaw": 44.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240, this.camera_8EFCEFB4_9E2F_5257_41DD_428724FB00A2); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 6.8,
   "image": "this.AnimatedImageResource_1F2CD703_3130_72C3_41C1_BC8686C4CC9A",
   "yaw": 90.65,
   "pitch": -6.61,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_277A6A98_3170_33CD_41AB_81D8396F5106",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.8,
   "yaw": 90.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002, this.camera_8EE14FAA_9E2F_5273_41D8_6E9D6E0EA93F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 2.17,
   "image": "this.AnimatedImageResource_1F2F2703_3130_72C3_41B2_9F1685B1E5A8",
   "yaw": 73.18,
   "pitch": 8.72,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_25988270_3170_335D_41C7_E4372FE16000",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.17,
   "yaw": 73.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA, this.camera_8EEEEFAF_9E2F_5271_41C3_0CF2816B7152); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_1F2F4703_3130_72C3_41BD_E3FCAFBEBD20",
   "yaw": -92.22,
   "pitch": -15.1,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_259EDA31_3170_12DF_41B5_5DA1DCDD82E5",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.79,
   "yaw": -92.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44, this.camera_8F2AFFC3_9E2F_5231_41D6_7FBFE4D23C08); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 18.89,
   "image": "this.AnimatedImageResource_17182823_31F0_1EC3_41BE_FB2141A7A91D",
   "yaw": 75.48,
   "pitch": -19.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2AB4FF52_31D0_115D_41C6_7C08925133C5",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.89,
   "yaw": 75.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6, this.camera_8EDD3FBE_9E2F_5253_41DD_C9AD06DA7B34); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 19.47,
   "image": "this.AnimatedImageResource_17187823_31F0_1EC3_419E_07D76C90F337",
   "yaw": 146.68,
   "pitch": -14.37,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2A121AC1_31D0_F3BF_41C0_E78CED4F03A0",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.47,
   "yaw": 146.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0, this.camera_8C0F4052_9E2F_6ED3_4199_D23FB7AC6103); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 3.37,
   "image": "this.AnimatedImageResource_171DA824_31F0_1EC5_41C4_41694067D81D",
   "yaw": -68.13,
   "pitch": -80.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2EC8A13A_31F0_0ECD_41C4_696E86871D24",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.37,
   "yaw": -68.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -80.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7, this.camera_8C3F104C_9E2F_6E37_41D2_1C63C688F952); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 16.24,
   "image": "this.AnimatedImageResource_171D1824_31F0_1EC5_418A_900E5851E912",
   "yaw": 141.47,
   "pitch": -36.07,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2E084AA1_31F0_33FF_41C2_C88B30C83410",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.24,
   "yaw": 141.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6, this.camera_8F76CFEA_9E2F_51F3_41E0_C0CFE09F1A03); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 16.4,
   "image": "this.AnimatedImageResource_2F2EA4EA_31D0_774D_4179_8CDBF6FB2632",
   "yaw": -32.36,
   "pitch": -35.32,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_28DE397F_3130_1143_41BF_BC2652E7DD7F",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.4,
   "yaw": -32.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C, this.camera_8F1B1FD3_9E2F_51D1_41D6_2E553ADAD27D); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 14.99,
   "image": "this.AnimatedImageResource_2F2E34EA_31D0_774D_41C8_44249176B4A8",
   "yaw": 25.12,
   "pitch": -41.75,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_28952917_3130_7EC3_41B3_6C4A6AB58945",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.99,
   "yaw": 25.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9, this.camera_8F46EFF0_9E2F_51EF_41DF_646A03999612); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 17.79,
   "image": "this.AnimatedImageResource_2F2E04EA_31D0_774D_41C6_A17D6FFCC789",
   "yaw": -4.75,
   "pitch": -27.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2B5BEDB4_3130_11C5_41C7_4B13E5337266",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.79,
   "yaw": -4.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_1_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25, this.camera_8F692FE0_9E2F_51EF_41E0_2CDED33A8BE1); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 10.52,
   "image": "this.AnimatedImageResource_171CA824_31F0_1EC5_41AD_A05D30C7BDFC",
   "yaw": -12.16,
   "pitch": -75.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_286718B8_312F_FFCD_41B2_DB1E0656EEDD",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.52,
   "yaw": -12.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -75.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "items": [
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.63",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_0",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.50",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.69"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.49",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.32"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_2",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.33",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.28"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_3",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.35",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.36"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_4",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.74",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.66"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_5",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.56",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.69"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_6",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.44",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.37"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_7",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.30",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.73"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_8",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.26",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.71"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_9",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.50",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.37"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_10",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.68",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.47"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_11",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.48",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.53"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.album_200D204D_3150_0F47_41AC_F1716095A921_12",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.64",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.73"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_200993A3_3150_11C3_41BC_5D28FEAAAE2B",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.44",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.35"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20F0070C_3150_12C5_41C2_8C84771153BC",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.51",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.37"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20BAA4B5_3150_37C7_41B1_30D504C0970F",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.36",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.40"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_204DEA71_3150_335F_41AC_EEE815050000",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.74",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.60"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20FB63E8_3150_114D_41C7_A04FBC24D5AC",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.70",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.33"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_209A6DA7_3150_11C3_419D_0A3B31AE4FA1",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.53",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.40"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20FB289E_316F_FFC5_41AD_C1851E206C5E",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.51",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.25"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20CC427E_3170_1345_4195_ACDCDA658DBD",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.64",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20EA4C6F_3170_1743_41C5_DBAD7908758C",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.45",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.71"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_203287DC_3170_3145_41B7_F25A731411DC",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.48",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.34"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_207FE989_3170_11CF_4194_F7CF0B9E8A59",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.44",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.58"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20D690E5_3170_0F47_41BA_C4B1DCF43414",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.31",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20FE8C99_3170_77CF_41BB_5201EB753340",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.43",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.58"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20CD562E_3170_12C5_41C8_3D9C070A9267",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.65",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.58"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20141B5B_3170_1143_41BE_8BC0265BAC28",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.31",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.59"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20F8B4C6_3170_3745_41BA_371BCDCF7C66",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.51",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.46"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20E08EB8_3170_33CD_41C3_1335A65FD146",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.66",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.43"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20E04999_3170_11CF_41A1_A497B9D6A6FF",
   "class": "PhotoPlayListItem"
  },
  {
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.57",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.39"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   },
   "media": "this.photo_20C0379C_3170_F1C5_41C5_1BD94F25CC61",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_200D204D_3150_0F47_41AC_F1716095A921_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "transparencyActive": true,
 "maxHeight": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "12%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "propagateClick": false,
 "minHeight": 70,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 70,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "height": "8%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand",
 "maxWidth": 150
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "width": "14.22%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "bottom": "20%",
 "minWidth": 50,
 "horizontalAlign": "center",
 "mode": "push",
 "top": "20%",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 10,
 "width": "14.22%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "bottom": "20%",
 "minWidth": 50,
 "horizontalAlign": "center",
 "mode": "push",
 "top": "20%",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "transparencyActive": true,
 "maxHeight": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "12%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "propagateClick": false,
 "minHeight": 70,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 70,
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "height": "8%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand",
 "maxWidth": 150
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "bottom": "20%",
 "minWidth": 50,
 "horizontalAlign": "center",
 "mode": "push",
 "top": "20%",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "14.22%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "bottom": "20%",
 "minWidth": 50,
 "horizontalAlign": "center",
 "mode": "push",
 "top": "20%",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_28EE921F_3130_32C3_41A8_D70BD521B316, this.camera_8F922025_9E2F_6E71_41D3_24FBCB3D9470); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 15.8,
   "image": "this.AnimatedImageResource_1719E823_31F0_1EC3_41C5_2A52027156E8",
   "yaw": 151.72,
   "pitch": -38.16,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2A56DA9A_31D0_13CD_41BA_F81116EF8BAE",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.8,
   "yaw": 151.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_29239270_3130_135D_41C2_BE8F20440948, this.camera_8F82C01A_9E2F_6E53_41C3_1E8AECC80721); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 18.76,
   "image": "this.AnimatedImageResource_17192823_31F0_1EC3_41A2_0266917FBBB5",
   "yaw": 32.76,
   "pitch": -20.97,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2C90FB7B_31D0_F143_41C7_D05A224E5AB4",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.76,
   "yaw": 32.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0, this.camera_8E69CF81_9E2F_5231_41DA_CAE494783DBE); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 14.9,
   "image": "this.AnimatedImageResource_17128824_31F0_1EC5_41A6_06D51298CB6B",
   "yaw": 66.8,
   "pitch": -42.15,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2D540E03_31D0_32C3_4175_FE41C169C0ED",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.9,
   "yaw": 66.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_29239270_3130_135D_41C2_BE8F20440948, this.camera_8E0B1F77_9E2F_52D1_41D5_1209702964A3); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 14.52,
   "image": "this.AnimatedImageResource_1712D824_31F0_1EC5_41C7_9A052AE02BF4",
   "yaw": -66.75,
   "pitch": -43.71,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2CED1BB2_31D1_F1DD_41B1_EB6CE5033BFC",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.52,
   "yaw": -66.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_291062D1_3130_F35F_41AA_CD2507357C95, this.camera_8E183F7C_9E2F_52D7_41E1_5EDD9B2C1C87); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 12.31,
   "image": "this.AnimatedImageResource_17122824_31F0_1EC5_41C4_871CACAAE2A9",
   "yaw": 162.31,
   "pitch": -52.22,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2C7723B9_31D0_11CF_41C1_D77908B1D014",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.31,
   "yaw": 162.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -52.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0_HS_2_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 19.99,
   "image": "this.AnimatedImageResource_17127824_31F0_1EC5_41C1_6A0C2646379B",
   "yaw": -5.62,
   "pitch": 5.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2F92582A_31D0_7ECD_41C3_8ED00EF17C79",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.99,
   "yaw": -5.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_291062D1_3130_F35F_41AA_CD2507357C95, this.camera_8C1F6056_9E2F_6ED3_41D4_60584DB91D44); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 13.35,
   "image": "this.AnimatedImageResource_1F26670A_3130_72CD_41C4_49BB46A207D6",
   "yaw": -153.92,
   "pitch": -66.87,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_131DEF0A_31D0_72CD_41AD_1F54A9A90B05",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.35,
   "yaw": -153.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -66.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_1_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.5,
   "image": "this.AnimatedImageResource_27C68165_3170_3147_41B9_4DFE53C85361",
   "yaw": 125.43,
   "pitch": -16.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_25847288_3170_F3CD_41C3_A2E2D6813A61",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.5,
   "yaw": 125.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A118009_3130_0ECF_41AD_777105188F7A, this.camera_8C2ED048_9E2F_6E3F_41E1_6FB4411EE5E2); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.43,
   "image": "this.AnimatedImageResource_27C6E165_3170_3147_4190_3B5D17F31E45",
   "yaw": -84.9,
   "pitch": -18.42,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_24AF7C86_3170_17C5_41A7_5E553A48B640",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.43,
   "yaw": -84.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9, this.camera_8FDE8042_9E2F_6E33_41BA_4C222FF8C598); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 18.85,
   "image": "this.AnimatedImageResource_171CE824_31F0_1EC5_41C5_C121298D0265",
   "yaw": 82.26,
   "pitch": -20.27,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2FAC8D5B_31F0_1143_41C5_BEEF27A862F2",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.85,
   "yaw": 82.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759, this.camera_8FD0303D_9E2F_6E51_41E1_88875D477DE5); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 18.81,
   "image": "this.AnimatedImageResource_171C5824_31F0_1EC5_41C6_F7106AC4AD33",
   "yaw": 36.06,
   "pitch": -20.62,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_2E14DEE1_31F0_137F_4190_0EF514C7EBA7",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.81,
   "yaw": 36.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1918652D_3130_36C7_41BA_2AD40D0E9663, this.camera_8ECCAFB9_9E2F_5251_41E3_066AE45BF84C); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 16.73,
   "image": "this.AnimatedImageResource_1F27B70A_3130_72CD_41C8_0D192BEC37FD",
   "yaw": -36.23,
   "pitch": -13.65,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_14AECD44_3130_1145_41C7_9FCD32E1BF6B",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.73,
   "yaw": -36.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_29122B07_3130_32C3_41C8_62E1DB5A854B, this.camera_8E552F91_9E2F_5251_41E2_8153248EB586); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 19.17,
   "image": "this.AnimatedImageResource_1F257709_3130_72CF_41C1_59EC6AB47338",
   "yaw": -100.78,
   "pitch": -17.49,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_1472DEE1_3130_137F_418D_BF424511FE58",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.17,
   "yaw": -100.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 19.42,
   "image": "this.AnimatedImageResource_1F259709_3130_72CF_41C1_DDD3B6583517",
   "yaw": -0.75,
   "pitch": -14.89,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_142B769A_3130_13CD_41C8_58FE71343C54",
 "data": {
  "label": "Circle 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.42,
   "yaw": -0.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3A118009_3130_0ECF_41AD_777105188F7A, this.camera_8C5CE06C_9E2F_6EF7_41C2_D4435D78916A); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.67,
   "image": "this.AnimatedImageResource_27C84164_3170_3145_41B7_05D203C161DD",
   "yaw": 4.22,
   "pitch": -8.09,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_22D2D1CA_3170_114D_41C3_452C309BFC4E",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.67,
   "yaw": 4.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25, this.camera_8C4CC067_9E2F_6EF1_41D5_BC98904B8255); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 5.66,
   "image": "this.AnimatedImageResource_27C8A164_3170_3145_41A3_8F5290572754",
   "yaw": 176.84,
   "pitch": -8.44,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_25F6AE8A_3170_13CD_41C2_5FCF8BE604F2",
 "data": {
  "label": "Circle 01a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.66,
   "yaw": 176.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "overflow": "visible",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "0%",
 "minWidth": 1,
 "horizontalAlign": "center",
 "class": "Container",
 "layout": "horizontal",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "height": 110,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "button menu sup"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_3ECC2219_3130_12CF_41C1_D8620D9A5980",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "91.304%",
 "borderRadius": 0,
 "right": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "class": "Container",
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "layout": "vertical",
 "contentOpaque": false,
 "gap": 3,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-button set"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 0,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 488.65,
 "borderRadius": 0,
 "textShadowBlurRadius": 10,
 "textShadowColor": "#000000",
 "text": "Rangrag studio",
 "propagateClick": true,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "top": 5,
 "minWidth": 1,
 "horizontalAlign": "left",
 "class": "Label",
 "fontSize": 90,
 "fontColor": "#FFFFFF",
 "textShadowVerticalLength": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "height": 86,
 "textShadowOpacity": 1,
 "shadow": false,
 "textShadowHorizontalLength": 0,
 "paddingBottom": 0,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "textDecoration": "none"
},
{
 "fontFamily": "Bebas Neue Book",
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 0.1,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 423.35,
 "borderRadius": 0,
 "textShadowBlurRadius": 10,
 "borderSize": 0,
 "textShadowColor": "#000000",
 "text": " Where Design Meets Imagination",
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Label",
 "bottom": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "fontSize": 41,
 "fontColor": "#FFFFFF",
 "textShadowVerticalLength": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "height": 46,
 "textShadowOpacity": 1,
 "shadow": false,
 "textShadowHorizontalLength": 0,
 "paddingBottom": 0,
 "data": {
  "name": "text 2"
 },
 "fontWeight": "normal",
 "textDecoration": "none"
},
{
 "maxHeight": 2,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "Image",
 "bottom": 53,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "height": 2,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "white line"
 },
 "maxWidth": 3000
},
{
 "overflow": "scroll",
 "children": [
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_29108FB3_3130_31C3_4192_631258F579DC",
  "this.Button_2999BC1E_3130_F6C5_41AA_68C4F818D28B",
  "this.Button_10224BCF_31F0_1143_41BF_A9F6F95E6A34"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 30,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": 1199,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "Container",
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "minWidth": 1,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "contentOpaque": false,
 "gap": 3,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "height": 51,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-button set container"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "scrollBarColor": "#000000",
 "bottom": "5%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "class": "Container",
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "overflow": "visible",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "borderRadius": 0,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "bottom": "80%",
 "minWidth": 1,
 "horizontalAlign": "right",
 "top": "5%",
 "layout": "vertical",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "scrollBarColor": "#000000",
 "bottom": "5%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "class": "Container",
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "overflow": "visible",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "borderRadius": 0,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "bottom": "80%",
 "minWidth": 1,
 "horizontalAlign": "right",
 "top": "5%",
 "layout": "vertical",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 }
},
{
 "overflow": "visible",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "scrollBarColor": "#000000",
 "bottom": "7%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "class": "Container",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "scrollBarColor": "#000000",
 "bottom": "5%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "class": "Container",
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "overflow": "visible",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "borderRadius": 0,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "bottom": "80%",
 "minWidth": 1,
 "horizontalAlign": "right",
 "top": "5%",
 "layout": "vertical",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 }
},
{
 "overflow": "visible",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "scrollBarColor": "#000000",
 "bottom": "7%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "class": "Container",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "overflow": "visible",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "scrollBarColor": "#000000",
 "bottom": "7%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "class": "Container",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "overflow": "visible",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "7%",
 "scrollBarColor": "#000000",
 "bottom": "7%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "center",
 "shadowHorizontalLength": 0,
 "class": "Container",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "overflow": "scroll",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "5%",
 "scrollBarColor": "#000000",
 "bottom": "5%",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "shadowHorizontalLength": 0,
 "class": "Container",
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "shadowVerticalLength": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": true,
 "paddingBottom": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "overflow": "visible",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 20,
 "borderRadius": 0,
 "right": "10%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Container",
 "bottom": "80%",
 "minWidth": 1,
 "horizontalAlign": "right",
 "top": "5%",
 "layout": "vertical",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container X global"
 }
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_27CB8164_3170_3145_41BB_F2C48B3957C5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_27C80164_3170_3145_41C7_65A34632E9E7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_06D03B56_32D0_1145_418C_7C46BC5D1E6F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3AFD5FD3_3130_1143_41BA_C6C827F08A25_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1F27C70A_3130_72CD_416F_02861C9EFB7D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_12D0E584_31F0_71C5_41BF_8AF3F21BF4C7_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1B4822FC_3130_1345_41AC_94B66C46A22C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_18BDE47A_3130_374D_41C0_19A250B5DC8E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1BFB1DF8_32D1_F14D_41BD_C605BA6CC215",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1F19270A_3130_72CD_41C3_8B89B3E8D536",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1BF8CDF8_32D1_F14D_41A9_B32E5AB339E9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1918652D_3130_36C7_41BA_2AD40D0E9663_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_171E4823_31F0_1EC3_41A8_D8A6A0994ABE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_171F9824_31F0_1EC5_41A6_861DDFD95A31",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_291FFA4E_3130_1345_41C6_21ECFFD998F6_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_27C9E164_3170_3145_41C8_A7520D8D9107",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_27C62165_3170_3147_41A9_68F1E3CC17B6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3A2D388A_3130_1FCD_4161_8FD8CDD93240_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_171E8823_31F0_1EC3_41A1_5E80AAF6445E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_171EE823_31F0_1EC3_419A_DD1705EDEADD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_29239270_3130_135D_41C2_BE8F20440948_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_27C72165_3170_3147_41C5_2B8F779E5E3C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_27C79165_3170_3147_41B0_232266DE4079",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3A2A2924_3130_3EC5_41C2_B6BAB124629B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1F242709_3130_72CF_41BA_4FFEE6539FB6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_29122B07_3130_32C3_41C8_62E1DB5A854B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1F2CD703_3130_72C3_41C1_BC8686C4CC9A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1F2F2703_3130_72C3_41B2_9F1685B1E5A8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1F2F4703_3130_72C3_41BD_E3FCAFBEBD20",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3A118009_3130_0ECF_41AD_777105188F7A_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_17182823_31F0_1EC3_41BE_FB2141A7A91D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_17187823_31F0_1EC3_419E_07D76C90F337",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_28EE921F_3130_32C3_41A8_D70BD521B316_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_171DA824_31F0_1EC5_41C4_41694067D81D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_171D1824_31F0_1EC5_418A_900E5851E912",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_291CEA74_3130_1345_41C5_6EFFFE0D6759_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2F2EA4EA_31D0_774D_4179_8CDBF6FB2632",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2F2E34EA_31D0_774D_41C8_44249176B4A8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2F2E04EA_31D0_774D_41C6_A17D6FFCC789",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_171CA824_31F0_1EC5_41AD_A05D30C7BDFC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_291062D1_3130_F35F_41AA_CD2507357C95_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1719E823_31F0_1EC3_41C5_2A52027156E8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_17192823_31F0_1EC3_41A2_0266917FBBB5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2913CA6F_3130_3343_41A9_8E69BE95CB44_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_17128824_31F0_1EC5_41A6_06D51298CB6B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1712D824_31F0_1EC5_41C7_9A052AE02BF4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_17122824_31F0_1EC5_41C4_871CACAAE2A9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_17127824_31F0_1EC5_41C1_6A0C2646379B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2AC5653A_31D0_16CD_41AD_89B36F0535E9_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1F26670A_3130_72CD_41C4_49BB46A207D6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1525EA4E_31F0_1345_41C7_4FD524A4BC8C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_27C68165_3170_3147_41B9_4DFE53C85361",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_27C6E165_3170_3147_4190_3B5D17F31E45",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3A2A90E7_3130_0F43_41B7_A02684E1C002_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_171CE824_31F0_1EC5_41C5_C121298D0265",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_171C5824_31F0_1EC5_41C6_F7106AC4AD33",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2921CA88_3130_F3CD_41B6_95DC8387F8F0_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1F27B70A_3130_72CD_41C8_0D192BEC37FD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2E17FAE7_31F0_7343_41C6_4538D78A62EE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1F257709_3130_72CF_41C1_59EC6AB47338",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1F259709_3130_72CF_41C1_DDD3B6583517",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_291D328F_3130_33C3_41C7_7AD6C1297D6E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_27C84164_3170_3145_41B7_05D203C161DD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "rowCount": 5,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_27C8A164_3170_3145_41A3_8F5290572754",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3A3788FD_3130_FF47_41B9_C82B1EC888BA_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 60,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "height": 60,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "transparencyActive": false,
 "maxHeight": 500,
 "id": "IconButton_3ECC2219_3130_12CF_41C1_D8620D9A5980",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 64.1,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_3ECC2219_3130_12CF_41C1_D8620D9A5980.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "click": "this.openLink('https://www.instagram.com/rangrag_studio/', '_blank')",
 "paddingTop": 0,
 "height": 66.05,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton6332"
 },
 "cursor": "hand",
 "maxWidth": 500
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": 58,
 "borderRadius": 0,
 "borderSize": 0,
 "propagateClick": true,
 "minHeight": 1,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "click": "this.openLink('https://www.facebook.com/profile.php?id=61561135798667', '_blank')",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "height": 58,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand",
 "maxWidth": 58
},
{
 "fontFamily": "Montserrat",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "layout": "horizontal",
 "width": 130,
 "borderRadius": 0,
 "iconHeight": 32,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "class": "Button",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "mode": "push",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "PANORAMA LIST",
 "fontStyle": "normal",
 "height": 40,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "data": {
  "name": "Button panorama list"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1
},
{
 "fontFamily": "Montserrat",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "layout": "horizontal",
 "width": 103,
 "borderRadius": 0,
 "iconHeight": 32,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "class": "Button",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "mode": "push",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "FLOORPLAN",
 "fontStyle": "normal",
 "height": 40,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "data": {
  "name": "Button floorplan"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1
},
{
 "fontFamily": "Montserrat",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "layout": "horizontal",
 "width": 112,
 "borderRadius": 0,
 "iconHeight": 32,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "class": "Button",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "horizontalAlign": "center",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false); this.mainPlayList.set('selectedIndex', 6)",
 "mode": "push",
 "rollOverBackgroundOpacity": 0.8,
 "fontSize": 12,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "PHOTOALBUM",
 "fontStyle": "normal",
 "height": 40,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "data": {
  "name": "Button photoalbum"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadowSpread": 1
},
{
 "fontFamily": "Cinzel Bold",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "id": "Button_29108FB3_3130_31C3_4192_631258F579DC",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 0,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedFontColor": "#000000",
 "width": 130,
 "borderRadius": 0,
 "iconHeight": 0,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "class": "Button",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "horizontalAlign": "center",
 "click": "this.mainPlayList.set('selectedIndex', 11)",
 "mode": "push",
 "rollOverBackgroundOpacity": 0,
 "fontSize": 14,
 "fontColor": "#FFFFFF",
 "rollOverShadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "INTERIOR ",
 "fontStyle": "normal",
 "height": 40,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 0,
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverFontColor": "#DB9B4D",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1
},
{
 "fontFamily": "Cinzel Bold",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "id": "Button_2999BC1E_3130_F6C5_41AA_68C4F818D28B",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 0,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedFontColor": "#000000",
 "width": 130,
 "borderRadius": 0,
 "iconHeight": 0,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "class": "Button",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "horizontalAlign": "center",
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "mode": "push",
 "rollOverBackgroundOpacity": 0,
 "fontSize": 14,
 "fontColor": "#FFFFFF",
 "rollOverShadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "EXTERIOR",
 "fontStyle": "normal",
 "height": 40,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 0,
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverFontColor": "#DB9B4D",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1
},
{
 "fontFamily": "Cinzel Bold",
 "rollOverBackgroundColor": [
  "#DB9B4D"
 ],
 "id": "Button_10224BCF_31F0_1143_41BF_A9F6F95E6A34",
 "pressedBackgroundColor": [
  "#DB9B4D"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 0,
 "iconBeforeLabel": true,
 "paddingRight": 0,
 "layout": "horizontal",
 "pressedFontColor": "#000000",
 "width": 130,
 "borderRadius": 0,
 "iconHeight": 0,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "class": "Button",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "horizontalAlign": "center",
 "click": "this.mainPlayList.set('selectedIndex', 21); this.MainViewerVideoPlayer.play()",
 "mode": "push",
 "rollOverBackgroundOpacity": 0,
 "fontSize": 14,
 "fontColor": "#FFFFFF",
 "rollOverShadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "Video",
 "fontStyle": "normal",
 "height": 40,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 0,
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "rollOverFontColor": "#DB9B4D",
 "backgroundColor": [
  "#000000"
 ],
 "shadowSpread": 1
},
{
 "overflow": "scroll",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "85%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%"
},
{
 "overflow": "visible",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "width": "50%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#0069A3",
 "verticalAlign": "top",
 "minWidth": 460,
 "horizontalAlign": "left",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "overflow": "scroll",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "85%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%"
},
{
 "overflow": "visible",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "width": "50%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#0069A3",
 "verticalAlign": "top",
 "minWidth": 460,
 "horizontalAlign": "left",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "overflow": "scroll",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": 140,
 "horizontalAlign": "left",
 "minWidth": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 }
},
{
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 70,
 "itemLabelHorizontalAlign": "center",
 "scrollBarWidth": 10,
 "itemMode": "normal",
 "itemMaxWidth": 1000,
 "borderRadius": 5,
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "horizontalAlign": "center",
 "scrollBarColor": "#04A3E1",
 "itemMaxHeight": 1000,
 "backgroundColorRatios": [
  0
 ],
 "itemLabelFontFamily": "Montserrat",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "minWidth": 1,
 "itemThumbnailWidth": 220,
 "itemBorderRadius": 0,
 "itemThumbnailOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "height": "100%",
 "itemHorizontalAlign": "center",
 "shadow": false,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemPaddingRight": 3,
 "itemBackgroundColorRatios": [],
 "selectedItemLabelFontColor": "#04A3E1",
 "backgroundOpacity": 0.05,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "itemBackgroundOpacity": 0,
 "borderSize": 0,
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "propagateClick": false,
 "itemMinHeight": 50,
 "rollOverItemThumbnailShadow": true,
 "class": "ThumbnailGrid",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemHeight": 156,
 "itemWidth": 220,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemLabelFontColor": "#666666",
 "itemMinWidth": 50,
 "selectedItemThumbnailShadow": true,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "itemBackgroundColorDirection": "vertical",
 "paddingTop": 10,
 "gap": 26,
 "itemThumbnailHeight": 125,
 "itemLabelGap": 7,
 "rollOverItemLabelFontColor": "#04A3E1",
 "paddingBottom": 70,
 "itemVerticalAlign": "top",
 "itemPaddingBottom": 3,
 "selectedItemLabelFontWeight": "bold",
 "data": {
  "name": "ThumbnailList"
 },
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadowHorizontalLength": 0
},
{
 "overflow": "scroll",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "85%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%"
},
{
 "overflow": "visible",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "backgroundOpacity": 1,
 "paddingLeft": 50,
 "scrollBarWidth": 10,
 "paddingRight": 50,
 "width": "15%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#0069A3",
 "verticalAlign": "top",
 "minWidth": 400,
 "horizontalAlign": "left",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "overflow": "scroll",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": 140,
 "horizontalAlign": "left",
 "minWidth": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": 140,
 "horizontalAlign": "left",
 "minWidth": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "header"
 }
},
{
 "overflow": "visible",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%"
},
{
 "overflow": "visible",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "height": "100%"
},
{
 "overflow": "scroll",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "55%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "layout": "absolute",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "-left"
 },
 "height": "100%"
},
{
 "overflow": "visible",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "backgroundOpacity": 1,
 "paddingLeft": 60,
 "scrollBarWidth": 10,
 "paddingRight": 60,
 "width": "45%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#0069A3",
 "verticalAlign": "top",
 "minWidth": 460,
 "horizontalAlign": "left",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "shadow": false,
 "paddingBottom": 20,
 "data": {
  "name": "-right"
 },
 "height": "100%"
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "IconButton",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "horizontalAlign": "center",
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "height": "75%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "Image",
 "minWidth": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000
},
{
 "overflow": "scroll",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": 60,
 "horizontalAlign": "right",
 "minWidth": 1,
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#E73B2C",
 "verticalAlign": "top",
 "minWidth": 100,
 "horizontalAlign": "left",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%"
},
{
 "overflow": "scroll",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": 370,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "height": 40
},
{
 "toolTipPaddingTop": 4,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "right": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#0066FF",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "bottom": 0,
 "playbackBarHeadShadowColor": "#000000",
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "class": "Container",
 "minWidth": 1,
 "horizontalAlign": "left",
 "top": "0%",
 "layout": "horizontal",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container arrows"
 }
},
{
 "overflow": "scroll",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": 60,
 "horizontalAlign": "right",
 "minWidth": 1,
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#E73B2C",
 "verticalAlign": "top",
 "minWidth": 100,
 "horizontalAlign": "left",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%"
},
{
 "overflow": "scroll",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": 370,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "height": 40
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "77.115%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "minHeight": 100,
 "borderSize": 0,
 "class": "HTMLText",
 "minWidth": 1,
 "top": "0%",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "class": "IconButton",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "minWidth": 50,
 "horizontalAlign": "right",
 "mode": "push",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "height": "36.14%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollEnabled": true,
 "top": "0%",
 "bottom": "0%",
 "minWidth": 1,
 "class": "WebFrame",
 "backgroundColorDirection": "vertical",
 "insetBorder": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "overflow": "scroll",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": 60,
 "horizontalAlign": "right",
 "minWidth": 1,
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#E73B2C",
 "verticalAlign": "top",
 "minWidth": 100,
 "horizontalAlign": "left",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%"
},
{
 "overflow": "scroll",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": 370,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "height": 40
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "77.115%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "minHeight": 100,
 "borderSize": 0,
 "class": "HTMLText",
 "minWidth": 1,
 "top": "0%",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "minWidth": 50,
 "horizontalAlign": "right",
 "mode": "push",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "height": "36.14%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 80,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "77.115%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "minHeight": 100,
 "borderSize": 0,
 "class": "HTMLText",
 "minWidth": 1,
 "top": "0%",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.21vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.21vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "class": "IconButton",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "minWidth": 50,
 "horizontalAlign": "right",
 "mode": "push",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "height": "36.14%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "toolTipShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingTop": 0,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 20,
 "width": "10%",
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "top",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "minWidth": 50,
 "horizontalAlign": "right",
 "mode": "push",
 "top": 20,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "height": "10%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "bottom",
 "class": "Image",
 "minWidth": 1,
 "horizontalAlign": "center",
 "top": "0%",
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Image"
 },
 "maxWidth": 2000
},
{
 "overflow": "scroll",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "height": 60,
 "horizontalAlign": "right",
 "minWidth": 1,
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#E73B2C",
 "verticalAlign": "top",
 "minWidth": 100,
 "horizontalAlign": "left",
 "layout": "vertical",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 30,
 "data": {
  "name": "Container text"
 },
 "height": "100%"
},
{
 "overflow": "scroll",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": 370,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container space"
 },
 "height": 40
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.71vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.71vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.39vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.55vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "width": "46%",
 "borderRadius": 0,
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "rollOverBackgroundOpacity": 1,
 "fontSize": "3vh",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "lorem ipsum",
 "backgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "iconBeforeLabel": true,
 "shadowBlurRadius": 6,
 "shadowSpread": 1
},
{
 "overflow": "scroll",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "80%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "top",
 "class": "Container",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "minWidth": 1,
 "layout": "absolute",
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "gap": 10,
 "paddingTop": 0,
 "height": "30%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "Container separator"
 }
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.71vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.71vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.39vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.6vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.6vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "width": "46%",
 "borderRadius": 0,
 "borderSize": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "horizontalAlign": "center",
 "mode": "push",
 "rollOverBackgroundOpacity": 1,
 "fontSize": "3vh",
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "lorem ipsum",
 "backgroundColor": [
  "#04A3E1"
 ],
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "fontStyle": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "iconBeforeLabel": true,
 "shadowBlurRadius": 6,
 "shadowSpread": 1
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.71vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.82vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.21vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "layout": "horizontal",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "paddingRight": 0,
 "width": 207,
 "borderRadius": 0,
 "iconHeight": 32,
 "borderSize": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#04A3E1"
 ],
 "horizontalAlign": "center",
 "mode": "push",
 "rollOverBackgroundOpacity": 1,
 "fontSize": 34,
 "fontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "minWidth": 1,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 0,
 "iconWidth": 32,
 "visible": false,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "iconBeforeLabel": true,
 "height": 59,
 "shadowSpread": 1
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "height": "45%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.73vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.08vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "overflow": "scroll",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "backgroundOpacity": 0.3,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "minWidth": 1,
 "horizontalAlign": "left",
 "layout": "horizontal",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "- content"
 },
 "height": "80%"
},
{
 "maxHeight": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "width": "25%",
 "borderRadius": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "horizontalAlign": "left",
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "top",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 1,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "data": {
  "name": "agent photo"
 },
 "maxWidth": 200
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "paddingLeft": 10,
 "scrollBarWidth": 10,
 "paddingRight": 10,
 "width": "75%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarColor": "#04A3E1",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "height": "100%",
 "shadow": false,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.39vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.97vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.82vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.82vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.03vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 }
}],
 "horizontalAlign": "left",
 "scripts": {
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "registerKey": function(key, value){  window[key] = value; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; }
 },
 "layout": "absolute",
 "contentOpaque": false,
 "downloadEnabled": false,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "data": {
  "name": "Player468"
 },
 "desktopMipmappingEnabled": false,
 "defaultVRPointer": "laser",
 "backgroundPreloadEnabled": true
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
