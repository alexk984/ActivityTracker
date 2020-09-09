import { Observable } from "../Core/Observable";

export interface ActivityService {
    readonly text: string;
}

export class ActivityService {
    readonly activities = new Observable<ActivityService[]>([]);

    addActivity(text: string) {
        this.activities.set([...this.activities.get(), { text }]);
    }
}

export const activityService = new ActivityService();