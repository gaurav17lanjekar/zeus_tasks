fetch("courses.json")
.then(function(response: Response){
    return response.json()
})
.then(function(courses: any[]){
    let placeholder: HTMLElement = document.getElementById("course-container")!;
    let out: string = "";
    for(let course of courses){
        out +=`
        <div class="courseWrapper" >
            <div class="courseCard">
            ${course.isfavourite ? `<span class="star"><img src="icons/favourite.svg" alt=""></span>`:'<span class="star"><img src="icons/not-favourite.svg" alt=""></span>' }
            ${course.isexpired ?`<span class="expired"} ">EXPIRED</span>`:''}
                <img src="${course.image}" alt="">
                <div class="courseDetails">
                    <p class="courseName">${course.title}</p>
                    <p class="subjectGrade">${course.subject} | <b> Grade ${course.grade}</b><span class="greencolor"> +${course.additional_grade}</span></p>
                    <p class="sylabus">${course.units ? `<b>${course.units}</b> Units `:'&nbsp;'}${course.lessons ? `<b>${course.lessons}</b> Lessons`:"&nbsp;"}${course.topics ? `<b>${course.topics}</b> Topics`:'&nbsp;'}</p>
                    <select class="teacher" value="state" name="state">
                    ${course.classes.length ?`

                    ${course.classes.map((clas: string) => `<option value="s1">${clas}</option>`).join('')}`:'<option value="s1">No Classes</option>'}
                       
                    </select>
                    
                    
                    <p class="Scount-Date">${course.students ?`<span class="studentCount">${course.students}</span> Students`:''}${course.students && course.start_date ?`|`:''} 
                    ${course.start_date ? `<span class="dateFrom">${course.start_date}</span> - <span class="dateTo">${course.end_date}</span>`:''}
                    </p>
                </div>


            </div>
            <div class="courseActions">
                <img ${course.footer.iswatch ? '':`class='blured'`} src="icons/preview.svg" alt="">
                <img ${course.footer.iscalender ? '':`class='blured'`}src="icons/manage course.svg" alt="">
                <img ${course.footer.isgraded ? '':`class='blured'`} src="icons/grade submissions.svg" alt="">
                <img ${course.footer.isreported ? '':`class='blured'`} src="icons/reports.svg" alt="">

            </div>

        </div>

        `;
    }
    placeholder.innerHTML = out;
})