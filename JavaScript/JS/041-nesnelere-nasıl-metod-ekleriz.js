let user1 = {
    firstName: "Sema",
    lastName: "İnal",
    score: [1,2,3,4],
    isActive: true,
    shortName: function() {
        return `${this.firstName[0].toUpperCase} ${this.lastName}`
    }
};


console.log(user1);


