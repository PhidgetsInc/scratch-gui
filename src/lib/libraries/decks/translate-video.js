/**
 * @fileoverview
 * Utility function to look up whether a translated video exists for a locale.
 */

// TODO: ja-Hira are copies of ja, replace with real ja-Hira when available.
const videos = {
    'intro-move-sayhello': {
        'en': 'rpjvs3v9gj',
        'it': '2im6c1f9kn',
        'pt': 'ngdfp8xg4x',
        'pt-br': 'ngdfp8xg4x',
        'ja': 'v2c2f3y2sc',
        'ja-Hira': 'v2c2f3y2sc'
    },
    'animate-a-name': {
        'en': 'pyur30ho05',
        'it': 'c8zcrk6w09',
        'pt': 't49tfrukyf',
        'pt-br': 't49tfrukyf',
        'ja': 'xrmgno02th',
        'ja-Hira': 'xrmgno02th'
    },
    'Make-Music': {
        'en': 'ir0j8ljsgm',
        'it': '8nm1v1m9zx',
        'pt': '9v4zl8504z',
        'pt-br': '9v4zl8504z',
        'ja': 'iybhyobckr',
        'ja-Hira': 'iybhyobckr'
    },
    'Make-A-Game': {
        'en': '5rp47ys13g',
        'it': 'vrs1e38944',
        'pt': 'rjst5ng61s',
        'pt-br': 'rjst5ng61s',
        'ja': 'h4q2ea3ojw',
        'ja-Hira': 'h4q2ea3ojw'
    },
    'Chase-Game': {
        'en': 'kusyx9thl5',
        'it': '899b2jmjlu',
        'pt': 'rw6kr9e37n',
        'pt-br': 'rw6kr9e37n',
        'ja': 'wr6ysk8s6d',
        'ja-Hira': 'wr6ysk8s6d'
    },
    'add-a-backdrop': {
        'en': 'nict6zdzlx',
        'it': 'vrrfpm5grh',
        'pt': 'wq7sm038pq',
        'pt-br': 'wq7sm038pq',
        'ja': 'j382ohngg7',
        'ja-Hira': 'j382ohngg7'
    },
    'change-size': {
        'en': 'p8va85hh61',
        'it': '1xb1jztsvr',
        'pt': '1ad1ip3ly7',
        'pt-br': '1ad1ip3ly7',
        'ja': 'uzkfi9uai0',
        'ja-Hira': 'uzkfi9uai0'
    },
    'glide-around': {
        'en': 'sh9j978rg8',
        'it': 'nvdhpgiebe',
        'ja': 'jsat4vhu48',
        'ja-Hira': 'jsat4vhu48'
    },
    'record-a-sound': {
        'en': 'ulzl1fbzny',
        'it': 'ncr9lqk7bt',
        'pt': 'aavagpvh5w',
        'pt-br': 'aavagpvh5w',
        'ja': '5zmy6u614k',
        'ja-Hira': '5zmy6u614k'
    },
    'spin-video': {
        'en': '07fed5hhpv',
        'it': 'obmrphhobt',
        'pt': 'jxqksu6zcw',
        'pt-br': 'jxqksu6zcw',
        'ja': 'hjhc0a8r7j',
        'ja-Hira': 'hjhc0a8r7j'
    },
    'hide-and-show': {
        'en': 'g479ahobo9',
        'it': 'v0vbx3l5uk',
        'pt': 'ibtmwb58y8',
        'pt-br': 'ibtmwb58y8',
        'ja': 'ruynguvag5',
        'ja-Hira': 'ruynguvag5'
    },
    'switch-costume': {
        'en': '1ocp6a1ejn',
        'it': 'nty4xjtqcj',
        'pt': 'pnlmmv2hs7',
        'pt-br': 'pnlmmv2hs7',
        'ja': 'g3vluv0ms8',
        'ja-Hira': 'g3vluv0ms8'
    },
    'move-around-with-arrow-keys': {
        'en': 'yetrmk4iuu',
        'it': 'jse0g0uddw',
        'pt': 'erv6eff78p',
        'pt-br': 'erv6eff78p',
        'ja': 'fk34dcg5oz',
        'ja-Hira': 'fk34dcg5oz'
    },
    'add-effects': {
        'en': '3jvl8zgjo2',
        'it': 'q3cjjyfju9',
        'pt': 'dz6jzpf7hm',
        'pt-br': 'dz6jzpf7hm',
        'ja': 'q7zq9vu0wb',
        'ja-Hira': 'q7zq9vu0wb'
    },
    'make-it-fly': {
        en: 'zbtdx2dem9'
    },
    'pong-game': {
        en: '8m48dv0ens'
    },
    'imagine': {
        en: '1ndh08yiso'
    },
    'code-cartoon': {
        en: 'fpfuky3x6g'
    },
    'talking': {
        en: 'j0208mq4qi'
    },
    'phidgets-gettingstarted3':{ 
        en: 'phidgets-JgwMkLUefXo'
    },
    'phidgets-gettingstarted4':{ 
        en: 'phidgets-Y980POXV6WI'
    },
    'phidgets-gettingstarted5':{ 
        en: 'phidgets-pjQkOUx7gUg'
    },
    'phidgets-gettingstarted6':{ 
        en: 'phidgets-8kP_De6mQ_s'
    },
    'phidgets-gettingstarted7':{ 
        en: 'phidgets-uzOtCPTsWkw'
    },
    'phidgets-gettingstarted8':{ 
        en: 'phidgets-Ib3ecuPKbOQ'
    },
    'phidgets-gettingstarted9':{ 
        en: 'phidgets-JH8mEf_fAHw'
    },
    'phidgets-stopwatch3':{ 
        en: 'phidgets-CcUF8lHxcl4'
    },
    'phidgets-stopwatch4':{ 
        en: 'phidgets-x5V1AeRpPwE'
    },
    'phidgets-stopwatch5':{ 
        en: 'phidgets-MdVpB41RAG0'
    },
    'phidgets-stopwatch6':{ 
        en: 'phidgets-4WQIt5MYYIM'
    },
    'phidgets-whackamole3':{ 
        en: 'phidgets-ygtflPR17Gg'
    },
    'phidgets-weather3':{ 
        en: 'phidgets-yvbkUUTU-wI'
    },
    'phidgets-weather4':{ 
        en: 'phidgets-BnPhxKf8B6M'
    },
    'phidgets-weather5':{ 
        en: 'phidgets-WckILYgbe1g'
    },
    'phidgets-weather6':{ 
        en: 'phidgets-rEXqZ1b3VXE'
    },
    'phidgets-jumpMove3':{ 
        en: 'phidgets-cheb2p9UR2U'
    },
    'phidgets-jumpMove4':{ 
        en: 'phidgets-4wYFizy3cs4'
    },
    'phidgets-jumpMove5':{ 
        en: 'phidgets-vOsNZ3iDnkE'
    },
    'phidgets-jumpMove6':{ 
        en: 'phidgets-ezMlk4MaFao'
    },
    'phidgets-jumpMove7':{ 
        en: 'phidgets-r7TN5ZQ_bmg'
    },
    'phidgets-gameShow3':{ 
        en: 'phidgets-64O0U_Mz5uY'
    },
    'phidgets-gameShow4':{ 
        en: 'phidgets-2OR2_BvbHUc'
    },
    'phidgets-gameShow5':{ 
        en: 'phidgets-pvutdZixcGk'
    },
    'phidgets-gameShow7':{ 
        en: 'phidgets-RWEcyn4Ic6I'
    },
    'phidgets-gameShow8':{ 
        en: 'phidgets-fuuNZ_aal1U'
    },
    'phidgets-gameShow10':{ 
        en: 'phidgets-nZjRgF94sPY'
    },
    // 'phidgets-mot1101':{
    //     en: 'phidgets-JBtYBpq5uis'
    // },
    // 'phidgets-hin1100':{
    //     en: 'phidgets-5v71eMofbAY'
    // }
};

/**
 * Return a video identifier (on our video hosting service)
 * @param {string} videoId key in the videos object, or id string.
 * @param {string} locale locale to look up. If locale is not defined return the id for 'en' by default
 * @return {string} identifier for the video on our video hosting service.
 */
const translateVideo = (videoId, locale) => {
    // if the videoId is not recognized in the videos object, assume it's already a video id on wistia
    if (!videos.hasOwnProperty(videoId)) return videoId;
    if (videos[videoId].hasOwnProperty(locale)) {
        return videos[videoId][locale];
    }
    return videos[videoId].en;
};

export {
    translateVideo
};
