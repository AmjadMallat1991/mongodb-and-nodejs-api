module.exports = (mongoose)=>{
    const Student = mongoose.model
    (
        'student',
        mongoose.Schema
        (
            {
                IDCArd: String,
                name: String,
                email: String,
                uni_year: String
            },
            {
                timestamps: true
            }
        )
    )
    return Student;
}