function weeklyWage(band, weeklyHours) {
    const map = {
        A: "23",
        B: "37",
        C: "51"
    };

    let weeklyHoursList = weeklyHours.split(",")
    var payPerWeeklyRate = 0;
    if (weeklyHoursList.length >= 7) {
        for (let i = 0; i < weeklyHoursList.length; i++) {
            if (band === "A") {
                payPerWeeklyRate += weeklyHoursList[i] * map.A;
            }
            if (band === "B") {
                payPerWeeklyRate += weeklyHoursList[i] * map.B;
            }
            if (band === "C") {
                payPerWeeklyRate += weeklyHoursList[i] * map.C;
            }
        };
        return payPerWeeklyRate;
    };
    return "missing day";

};