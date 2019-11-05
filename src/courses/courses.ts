export interface Course {
    crn: number;
    code: number;
    key: string;
}

function printCourseInfo(course: Course) {
    console.log(`${course.key} ${course.code}\nCRN: ${course.crn}`);
}

const myCourse: Course = {
    crn: 10000,
    code: 350,
    key: 'SENG',
};

printCourseInfo(myCourse);
