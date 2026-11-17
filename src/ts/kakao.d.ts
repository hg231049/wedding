interface KakaoLatLng {
  // 카카오맵 좌표 객체
}

interface KakaoMap {
  // 카카오맵 인스턴스
}

interface KakaoMarker {
  setMap(map: KakaoMap | null): void;
}

interface KakaoMaps {
  load(callback: () => void): void;

  LatLng: new (latitude: number, longitude: number) => KakaoLatLng;

  Map: new (
    container: HTMLElement,
    options: {
      center: KakaoLatLng;
      level: number;
    },
  ) => KakaoMap;

  Marker: new (options: { position: KakaoLatLng }) => KakaoMarker;
}

// 카카오톡 공유 타입
interface KakaoShare {
  sendDefault(options: {
    objectType: "feed";
    content: {
      title: string;
      description: string;
      imageUrl: string;
      link: {
        mobileWebUrl: string;
        webUrl: string;
      };
    };
    buttons: {
      title: string;
      link: {
        mobileWebUrl: string;
        webUrl: string;
      };
    }[];
  }): void;
}

interface KakaoSDK {
  isInitialized(): boolean;
  init(key: string): void;
  Share: KakaoShare;
}

declare global {
  interface Window {
    kakao?: {
      maps: KakaoMaps;
    };

    Kakao?: KakaoSDK;
  }
}

export {};
