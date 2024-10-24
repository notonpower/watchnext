// data/netflix.ts
import { Content } from '@/types';

export const netflixData = {
  tv_shows: [
    {
      title: "モンスター",
      image: "/images/monster.webp",
      rank: 1,
      contentType: "tv" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 1
        }
      ]
    },
    {
      title: "ドラゴンボールDAIMA",
      image: "/images/dbdaima.webp",
      rank: 2,
      contentType: "tv" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 2
        }
      ]
    },
    {
      title: "ダンダダン",
      image: "/images/dandadan.webp",
      rank: 3,
      contentType: "tv" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 3
        }
      ]
    },
    {
      title: "ハズレ枠の【状態異常スキル】で最強になった俺がすべてを蹂躙するまで",
      image: "/images/hazure-waku.webp",
      rank: 4,
      contentType: "tv" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 4
        }
      ]
    },
    {
      title: "ブルーロック",
      image: "/images/bluelock.webp",
      rank: 5,
      contentType: "tv" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 5
        }
      ]
    },
    {
      title: "チ。ー地球の運動についてー",
      image: "/images/chi-earth.webp",
      rank: 6,
      contentType: "tv" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 6
        }
      ]
    },
    {
      title: "機動戦士ガンダム 復讐のレクイエム",
      image: "/images/gundam-requiem.webp",
      rank: 7,
      contentType: "tv" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 7,
          label: "Only on Netflix"
        }
      ]
    },
    {
      title: "放課後カルテ",
      image: "/images/houkago-karte.webp",
      rank: 8,
      contentType: "tv" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 8
        }
      ]
    },
    {
      title: "夏目友人帳",
      image: "/images/natsume-yuujinchou.webp",
      rank: 9,
      contentType: "tv" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 9
        }
      ]
    },
    {
      title: "ライオンの隠れ家",
      image: "/images/lion-kakurega.webp",
      rank: 10,
      contentType: "tv" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 10
        }
      ]
    }
  ],
  movies: [
    {
      title: "ミステリと言う勿れ",
      image: "/images/mystery-to-iu-nakare.webp",
      rank: 1,
      contentType: "movie" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 1
        }
      ]
    },
    {
      title: "沈黙のパレード",
      image: "/images/chinmoku-no-parade.webp",
      rank: 2,
      contentType: "movie" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 2
        }
      ]
    },
    {
      title: "サバイバル・ドライブ",
      image: "/images/survival-drive.webp",
      rank: 3,
      contentType: "movie" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 3
        }
      ]
    },
    {
      title: "20世紀少年 -第1章- 終わりの始まり",
      image: "/images/20th-century-boys-1.webp",
      rank: 4,
      contentType: "movie" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 4
        }
      ]
    },
    {
      title: "ロスト・イン・シャドー",
      image: "/images/lost-in-shadow.webp",
      rank: 5,
      contentType: "movie" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 5,
          label: "Only on Netflix"
        }
      ]
    },
    {
      title: "アイズ・オン・ユー",
      image: "/images/eyes-on-you.webp",
      rank: 6,
      contentType: "movie" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 6,
          label: "Only on Netflix"
        }
      ]
    },
    {
      title: "戦と乱",
      image: "/images/ikusa-to-ran.webp",
      rank: 7,
      contentType: "movie" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 7,
          label: "Only on Netflix"
        }
      ]
    },
    {
      title: "20世紀少年 -第2章- 最後の希望",
      image: "/images/20th-century-boys-2.webp",
      rank: 8,
      contentType: "movie" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 8
        }
      ]
    },
    {
      title: "アウトサイド",
      image: "/images/outside.webp",
      rank: 9,
      contentType: "movie" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 9,
          label: "Only on Netflix"
        }
      ]
    },
    {
      title: "オットーという男",
      image: "/images/otto-to-iu-otoko.webp",
      rank: 10,
      contentType: "movie" as const,
      platforms: [
        {
          name: "Netflix" as const,
          rank: 10
        }
      ]
    }
  ]
};