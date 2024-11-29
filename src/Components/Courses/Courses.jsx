import { useEffect, useState } from "react";
import { People } from "@mui/icons-material";
import { courseData } from "./CourseData";
import TargetCourse from "./TargetCourse";

import "./Courses.scss";
function Courses() {
  const [isTargetCourse, setIsTargetCourse] = useState(false);
  const [tarCourse, setTarCourse] = useState();
  const [randomCourse, setRandomData] = useState([]);
  useEffect(() => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(courseData[Math.floor(Math.random() * courseData.length)]);
    }
    setRandomData(data);
  }, []);
  return (
    <div className="course-container">
      <div className="course-data">
        {isTargetCourse ? (
          <TargetCourse course={tarCourse} />
        ) : (
          randomCourse.map((course, index) => {
            return (
              <>
                <div key={index} className="course">
                  <div className="img-course">
                    <img src={course.img} />
                  </div>
                  <div className="course-info-info">
                    <div className="title-course">
                      <h4>{course.title}</h4>
                    </div>
                    <div className="description-course">
                      <p>{course.desc}</p>
                    </div>
                    <div className="course-info-btn">
                      <button
                        onClick={() => {
                          setTarCourse(course);
                          setIsTargetCourse(true);
                        }}
                      >
                        Course Info
                      </button>
                    </div>
                    <div className="meta-data-course">
                      <div className="user">
                        <People />
                        {course.user}
                      </div>
                      <div className="prise">{`$${course.price}`}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Courses;
