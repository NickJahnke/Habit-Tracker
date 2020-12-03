const HabitController = require('../controllers/habits');


module.exports = (app) => {
    app.post("/api/create",HabitController.createHabit);
    app.post("api/edit/:id",HabitController.editHabit);
    app.post("api/delete/:id",HabitController.deleteHabit)
    app.get("/api/habits", HabitController.getHabits);
    app.get("api/:id", HabitController.showHabit);
}

