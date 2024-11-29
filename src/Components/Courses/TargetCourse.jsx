import React from "react";
import "./TargetCourse.scss";
import { FormatQuoteTwoTone, Money, PeopleOutline } from "@mui/icons-material";

function TargetCourse({ course }) {
  return (
    <div className="target-course">
      <h4>{course.title}</h4>
      <div className="course-imgae">
        <img src={course.img} alt="" />
      </div>
      <div className="course-description">
        <FormatQuoteTwoTone />
        <p>{course.desc}</p>
        <FormatQuoteTwoTone />
      </div>
      <div className="target-info-course">
        <div>
          <PeopleOutline />
          {course.user}
        </div>

        <div>
          <Money />
          {course.user}
        </div>
      </div>
    </div>
  );
}

export default TargetCourse;
