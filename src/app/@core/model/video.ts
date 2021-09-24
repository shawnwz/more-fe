export interface Video {
    identifier: number;
    title: string;
    description: string;
    image_url: string;
    vip_video: boolean;
    full_video_url: string;
    summary: string;
    keywords: string[];
    online_time: number;
    english_title: string;
}

export interface ListVideoParameters extends Omit<Video, 'full_video_url' | 'image_url' | 'online_time'> {
    startTime: number;
    endTime: number;
}

export interface VideoList {
    list: Video[];
    count: number;
}
