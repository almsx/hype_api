"use strict";
const UserInfo = use("App/Models/UserInfo");

class UserInfoController {
  async index({ response }) {
    try {
      const allUserInfos = await UserInfo.all();

      return response.status(200).json(allUserInfos);
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ error: "Internal Server Error: " + error.message });
    }
  }
  async parse({ request, response }) {
    try {
      const { encodedString } = request.all();
      const parsedData = this.parseEncodedString(encodedString);

      // Validate input before insert in DB.
      const rules = {
        first_name: "required|string",
        last_name: "required|string",
        user_id: "required|integer",
      };

      const validation = await use("Validator").validate(parsedData, rules);

      if (validation.fails()) {
        return response.status(422).json({
          error: "Invalid Input",
          input: parsedData,
          messages: validation.messages(),
        });
      }

      // Save the parsed data in DB.
      await this.storeUserInfo(parsedData);

      return response.status(200).json(parsedData);
    } catch (error) {
      console.error(error);
      return response
        .status(500)
        .json({ error: "Internal Server Error: " + error.message });
    }
  }

  async storeUserInfo({ first_name, last_name, user_id }) {
    const userInfo = new UserInfo();
    userInfo.first_name = first_name;
    userInfo.last_name = last_name;
    userInfo.user_id = user_id;

    // Save in DB
    await userInfo.save();
  }

  parseEncodedString(encodedString) {
    const regex = /^(.*?)0+(.*?)0+(\d+)$/g;

    const [, first_name, last_name, user_id] = regex.exec(encodedString);

    return { first_name, last_name, user_id };
  }
}

module.exports = UserInfoController;
