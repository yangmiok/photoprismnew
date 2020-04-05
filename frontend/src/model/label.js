import Abstract from "model/abstract";
import Api from "common/api";
import { DateTime } from "luxon";

class Label extends Abstract {
    getEntityName() {
        return this.LabelSlug;
    }

    getId() {
        return this.LabelSlug;
    }

    getTitle() {
        return this.LabelName;
    }

    getThumbnailUrl(type) {
        return "/api/v1/labels/" + this.getId() + "/thumbnail/" + type;
    }

    getThumbnailSrcset() {
        const result = [];

        result.push(this.getThumbnailUrl("fit_720")  + " 720w");
        result.push(this.getThumbnailUrl("fit_1280") + " 1280w");
        result.push(this.getThumbnailUrl("fit_1920") + " 1920w");
        result.push(this.getThumbnailUrl("fit_2560") + " 2560w");
        result.push(this.getThumbnailUrl("fit_3840") + " 3840w");

        return result.join(", ");
    }

    getThumbnailSizes() {
        const result = [];

        result.push("(min-width: 2560px) 3840px");
        result.push("(min-width: 1920px) 2560px");
        result.push("(min-width: 1280px) 1920px");
        result.push("(min-width: 720px) 1280px");
        result.push("720px");

        return result.join(", ");
    }

    getDateString() {
        return DateTime.fromISO(this.CreatedAt).toLocaleString(DateTime.DATETIME_MED);
    }

    toggleLike() {
        this.LabelFavorite = !this.LabelFavorite;

        if(this.LabelFavorite) {
            return Api.post(this.getEntityResource() + "/like");
        } else {
            return Api.delete(this.getEntityResource() + "/like");
        }
    }

    like() {
        this.LabelFavorite = true;
        return Api.post(this.getEntityResource() + "/like");
    }

    unlike() {
        this.LabelFavorite = false;
        return Api.delete(this.getEntityResource() + "/like");
    }

    static getCollectionResource() {
        return "labels";
    }

    static getModelName() {
        return "Label";
    }
}

export default Label;
