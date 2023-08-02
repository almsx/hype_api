"use strict";

const Model = use("Model");

class UserInfo extends Model {
  static get table() {
    return "user_infos";
  }

  static get fillable() {
    return ["first_name", "last_name", "user_id"];
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = UserInfo;
