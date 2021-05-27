(function ($) {
    $(document).ready(function () {
        function createSocialLink($el, links) {
            let templete = '';
            links.forEach(item => {
                templete += `<li>
                                <a target="_blank" href="${item.link}">
                                    <i class="fa fa-${item.icon}"></i>
                                </a>
                            </li>
                            `;
            })
            $("#" + $el).html(templete)

        }

        function createSkillList($el, links) {
            let templete = '';
            links.forEach(item => {
                templete += `<li><span>${item}</span></li>`;
            })
            $("#" + $el).html(templete)
        }

        function createWorkList($el, worklist) {
            let templete = '';
            worklist.forEach(item => {
                templete += `
                    <div class="col-sm-4">
                        <div class="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s"data-wow-delay="0.5s">
                            <i class="fa ${item.icon}"></i>
                            <h3>${item.name}</h3>
                            <p>
                                ${item.description}
                            </p>
                            <div class="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                <ul id="work-${item.name.replaceAll(" ", "-").toLowerCase()}">
                                
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
            })
            $("#" + $el).after(templete)
            worklist.forEach(item => {
                const { name, tags } = item;
                let tagList = '';
                tags.forEach(item => {
                    tagList += `<li><span>${item}</span></li>`
                })
                $("#work-" + name.replaceAll(" ", "-").toLowerCase()).html(tagList)
            })
        }
        function createEducationList($el, educationList) {
            let education = '';
            educationList.forEach(item => {
                const { title, institution, passingYear, result } = item
                education += `
                     <div class="mh-education-item dark-bg wow fadeInUp" data-wow-duration="0.8s"
                                 data-wow-delay="0.3s">
                                <p style="font-size: 21px;margin-bottom: 5px">${title}</p>
                                <p>${institution}</p>
                                <div class="mh-eduyear">${passingYear[0]}-${passingYear[1]}</div>
                                <p>${result[0]} <b>${result[1]}</b> out of <b> ${result[2]} </b></p>
                            </div>
                `
            })
            $("#" + $el).html(education)
        }
        $.getJSON('../assets/data/information.json', function (data) {
            console.log({ data })
            const {
                name,
                position,
                mailAddress,
                phone,
                address,
                socialLinks,
                imagePath,
                shortInfo,
                skillList,
                cvDownloadLink,
                workHistories,
                educationList
            } = data
            $("#name_me").html(name);
            $("#position").html(position);
            $("#mailAddress").html(mailAddress);
            $("#phone").html(phone);
            $("#address").html(address)
            $("#imageUrl").prop('src', imagePath)
            $("shortIntro").html(shortInfo)
            createSocialLink("socialLinks", socialLinks)
            createSkillList("skillList", skillList)
            $("#cvDownloadLink").prop('href', cvDownloadLink)
            createWorkList("workHistories", workHistories)
            createEducationList("educationList", educationList)
        })
    })
})(jQuery)