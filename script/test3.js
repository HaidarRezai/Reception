let rooms = [
    {
        "room": 1,
        "person": [
            {
                "id": 1,
                "fullname": "Karim Ahmadi",
                "age": 21,
                "enter_date": "1403-10-2",
                "image": "https://randomuser.me/api/portraits/men/1.jpg",
                "info": "Karim is a passionate individual interested in technology and innovation."
            },
            {
                "id": 2,
                "fullname": "Salaim Ahmadi",
                "age": 22,
                "enter_date": "1403-9-2",
                "image": "https://randomuser.me/api/portraits/men/2.jpg",
                "info": "Salaim loves exploring new cultures and is an avid traveler."
            },
            {
                "id": 3,
                "fullname": "Shahin Ahmadi",
                "age": 22,
                "enter_date": "1403-9-4",
                "image": "https://randomuser.me/api/portraits/men/3.jpg",
                "info": "Shahin is passionate about sports and enjoys staying active in his free time."
            }, {
                "id": 4,
                "fullname": "Farhad Ahmadi",
                "age": 23,
                "enter_date": "1403-6-22",
                "image": "https://randomuser.me/api/portraits/men/9.jpg",
                "info": "Farhad is passionate about music and plays multiple instruments."
            },
            {
                "id": 5,
                "fullname": "Samim Jalali",
                "age": 20,
                "enter_date": "1403-5-12",
                "image": "https://randomuser.me/api/portraits/men/10.jpg",
                "info": "Samim is a young entrepreneur exploring the tech industry."
            }
        ]
    },
    {
        "room": 2,
        "person": [
            {
                "id": 1,
                "fullname": "Qasim Ahmadi",
                "age": 21,
                "enter_date": "1403-10-2",
                "image": "https://randomuser.me/api/portraits/men/4.jpg",
                "info": "Qasim is a software developer who loves coding and creating innovative solutions."
            },
            {
                "id": 2,
                "fullname": "Jamil Ahmadi",
                "age": 22,
                "enter_date": "1403-9-2",
                "image": "https://randomuser.me/api/portraits/men/5.jpg",
                "info": "Jamil is passionate about photography and enjoys capturing moments through his lens."
            },
            {
                "id": 3,
                "fullname": "Saif Ahmadi",
                "age": 22,
                "enter_date": "1403-9-4",
                "image": "https://randomuser.me/api/portraits/men/6.jpg",
                "info": "Saif is an entrepreneur with a keen interest in business and startups."
            }
        ]
    },
    {
        "room": 3,
        "person": [
            {
                "id": 1,
                "fullname": "Ali Karimi",
                "age": 24,
                "enter_date": "1403-8-15",
                "image": "https://randomuser.me/api/portraits/men/7.jpg",
                "info": "Ali enjoys reading and learning about history and politics."
            },
            {
                "id": 2,
                "fullname": "Reza Ahmadi",
                "age": 25,
                "enter_date": "1403-7-10",
                "image": "https://randomuser.me/api/portraits/men/8.jpg",
                "info": "Reza is an artist who specializes in digital painting and design."
            },
            {
                "id": 3,
                "fullname": "Farhad Ahmadi",
                "age": 23,
                "enter_date": "1403-6-22",
                "image": "https://randomuser.me/api/portraits/men/9.jpg",
                "info": "Farhad is passionate about music and plays multiple instruments."
            },
        ]
    },
    {
        "room": 4,
        "person": [
            {
                "id": 1,
                "fullname": "Samim Jalali",
                "age": 20,
                "enter_date": "1403-5-12",
                "image": "https://randomuser.me/api/portraits/men/10.jpg",
                "info": "Samim is a young entrepreneur exploring the tech industry."
            },
            {
                "id": 2,
                "fullname": "Zia Ahmadi",
                "age": 28,
                "enter_date": "1403-4-8",
                "image": "https://randomuser.me/api/portraits/men/11.jpg",
                "info": "Zia is an experienced project manager with a passion for team building."
            },
            {
                "id": 3,
                "fullname": "Fazil Rahimi",
                "age": 27,
                "enter_date": "1403-3-15",
                "image": "https://randomuser.me/api/portraits/men/12.jpg",
                "info": "Fazil is a freelance writer who enjoys creating content on various topics."
            }
        ]
    }
];



let table = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Enter Date</th>
                    <th>Info</th>
                    <th>Profile</th>
                </tr>
            </thead>
            <tbody id="rows">
                
            </tbody>
        </table>`


for (i in rooms) {
    document.getElementById("btns").innerHTML += `<a id="${rooms[i].room}" onclick="setNum(${i})">${rooms[i].room}</a>`
}

let pages = new Array()
function setNum(abc) {
    let persons = ``
    let counter = (abc + 1)
    document.getElementById("show").innerHTML = table


    pages.push(abc + 1)
    let prev_page = Number(pages.slice(pages.length - 2, pages.length - 1))
    if (prev_page >= 1) {
        document.getElementById(prev_page).classList.remove("pagenum")
    }

    for (i of rooms[abc].person) {
        document.getElementById(counter).classList.add("pagenum")
        document.getElementById(counter).classList.add("show_page")
        persons += `
            <tr>
                <td>${i.id}</td>
                <td>${i.fullname}</td>
                <td>${i.age}</td>
                <td>${i.enter_date}</td>
                <td>${i.info}</td>
                <td>
                    <img src="${i.image}" alt="">
                </td>
            </tr>
`
    }
    document.getElementById("rows").innerHTML = persons
}

function search() {
    let search_name = document.getElementById("search").value

    for (i of rooms) {
        for (k of i.person) {
            if (search_name == k.fullname) {
                document.getElementById(`${i.room}`).classList.add("active");
                break;
            }
        }
    }
}