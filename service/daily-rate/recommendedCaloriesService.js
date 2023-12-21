// recommendedCaloriesService.js

const { ListNotFood } = require("../../models");
const { ListFood } = require("../../models");

const getUserData = async (userId) => {
    try {
        const user = await ListNotFood.findOne({ userId }).exec();

        if (!user) {
            throw new Error("User not found");
        }

        return {
            weight: user.weight,
            height: user.height,
            age: user.age,
            desiredWeight: user.desiredWeight,
        };
    } catch (error) {
        console.error("Error in getUserData:", error);
        throw error;
    }
};

const getNonRecommendedFoodList = async (finalWeight) => {
    try {
        const nonRecommendedFoods = await ListFood.find({
            recommended: false,
            fatContent: { $gte: 10 },
            sugarContent: { $gte: 5 },
            sodiumContent: { $gte: 500 },
            // ... other nutritional criteria
        }).exec();

        return nonRecommendedFoods;
    } catch (error) {
        console.error("Error in getNonRecommendedFoodList:", error);
        throw error;
    }
};

module.exports = {
    getUserData,
    getNonRecommendedFoodList,
};
