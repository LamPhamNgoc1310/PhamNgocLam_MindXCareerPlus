import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu.jsx'

function App() {

    const data = [
        {
            "id": "1",
            "movieName": "Weather With You",
            "description": "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
            "image": "",
            "episode": "01"
        },
        {
            "id": "2",
            "movieName": "Once Peace",
            "description": "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
            "image": "https://s3-alpha-sig.figma.com/img/6ea2/8ccf/1ea53edb90b65e5d33d48205a91a17a0?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZYLbJoiXHG7S4Y4AiooN0I8CUkzRufAqr2Iv5kkozprJERhYcSLwR4tawlv2lTbfqwkP9kKiGr0T1h7PIVMKmPqeLVaWUuRRaAjW0~xZ8fQsJ6mX9e0bueJ59XGFZ~GgtgL~2LDJzcIx3IP41obe570x6yqNLQXoS7qafaoyLva~3C4b7l6DifNvkiCm7DPUWmfWVzi6RqYufo2Hed3vhteF-pem5NEKl4gZ5OcDVSKnorfGrlfIlIP9-DuX-BRBharBFy84aeyfTooC~B~cuX0CZrgcNavZmfv7QBw2KAbO9E0VpBazcaCb5n-wQcPpYRGgZLTSqQvk-nyMbwRRA__",
            "episode": "1018"
        },
        {
            "id": "3",
            "movieName": "Boruto: Naruto Next Generations",
            "description": "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki – “con” của Orochimaru.",
            "image": "https://s3-alpha-sig.figma.com/img/14e9/6cd4/177b17eb1ee85d84d09efcc0fa3e1b69?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YI-LFd8H6jvY8CwGTd3QjC2yX0QsaFRM61DA4PXXnA5I0Ss651IrVcu-gnZ6j~Qz8PeUxlWft~sgj9aSXGnAJI1gYi2or4CXNOhnh6AAePX3DP6xmtRJYwGK~UxHY5dRse0hBZ2H-RnuBUCg4PwBBYHb1zE~1jqn5g1E~a86Htke4RfJgw99OfFpc0D0Me0rwlDEw1RfF6RSDYxiKTRvaG0AowOaIWMQ~~JfzZHiZ4phdxHyHR2iQD69EpNPhuJh8ix-AdVEkoiecM639hVvVLk5Kr7gFb1Qknlk~yXLNDLZ~rWo6HeBCtWf1ckU2eATFJwsYqOhyEZHJW6BHMyILA__",
            "episode": "250"
        },
        {
            "id": "4",
            "movieName": "Spy X Family",
            "description": "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới",
            "image": "https://s3-alpha-sig.figma.com/img/894b/a9f6/56cb8d734f17921555e3af4d5fbfd914?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GcQwGQZBzGZjG25Vkd9ATNW8qx859BIAxT8uDaEWmDJVxNv-RCMB2uWELUZVMT6B2iaPyT2MWP24GGPbaOfNK-m01mn-vLEtitCvFRaNxR88J6tJ--z1vVr3rgueUViKoa6EPiwBJWKePhkFL1pp6hsc376vAogaqaYnqJyJwLwALQN1AtxaPYhM~3mvAoo3b8mzXLD1fHfTP2pv1wkvBB5Fj-fFEvhBe7GZus8f541TwezEAqBznz-uujChdn5B2fzv~QuEO1osEyDEXcdEVWS10W-Y7RfwA1SM6RttwIlQjoYvXWQZuEA6jBGsZYkLaIvHHw8UeFFxAYxVtQIggA__",
            "episode": "07"
        },
        {
            "id": "5",
            "movieName": "Shingeki no kyojin",
            "description": "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
            "image": "https://s3-alpha-sig.figma.com/img/f045/43fa/554deceb9b7c888745b5f43729a208d3?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IMdiY~VdFIyxoXj-fO6gA-G-lxUrJEIRBhvmtRIz2FPM3cT~FfuYRPSpg7laf0UCJrGsL09CdYEKADRgxQyVAS7HambIR0Xtx3Ba33FBVXRpnBnTGhftnUUvF1X5nbuBQvJ7BTpCjE6Vjgm1IYqdA-yrblG1N-vRuZN3yfB4goMK1SrXalVB4KCsQtAqVyOYCILSilRbLQ0FXVpN-ydN2bnBZIUaTfl-qZAGrrsVQNmALTh~Ho6QWOFe4rV0pE8b~N0-4sFXYdT9d8ZCsuXPuQPzm5xYjt02N64K6J4X99d-wCxpGDK5S98bPyiYBAw8VYxzQuFl0JQuvvVQIYOMeg__",
            "episode": "28"
        },
        {
            "id": "6",
            "movieName": "Captain Tsubasa",
            "description": "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của 'Tsubasa Giấc mơ sân cỏ', với những chi tiết được thêm hoặc bỏ, để cộng thêm nét đặc trưng vào bộ truyện. Bộ phim này đã làm vợi lên kí ức về tuổi thơ của biết bao người.",
            "image": "https://s3-alpha-sig.figma.com/img/e5ab/b83d/eb0371790de015fd2dc503be277bd97b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eOooanSDyFzrRByJETj3S7R1alpilX~rbZAWOrfrva785NgGIzSyBbFK58CJ3OvIsaM4o1Bk83U6UVE-e5FqVyFBfo92b1rWRPEWYzHPPj8J4GEeOJwLcDPm5TMn6QYQ-7~QFq4dJQNS1GCw-C7SbSS3kgiaAJPS6tMIQuB-yFIDg7P-CophxwjTwebbEUDvHcyVrmDYTV7qGWF653oITmLJLIQ3gY4cZs7jJWMRcplaCAg2hgc63jXFp3GFn6fzEiWdVLfsspGQTuyqikfX3~dlCBd0RX6xBG495xxfA67kNsW9ssulEy9-Lhj~~c5JFNb2bp7dR8T~20tiDu5iUQ__",
            "episode": "28"
        },
        {
            "id": "7",
            "movieName": "Ao Ashi",
            "description": "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng đến từ một thị trấn vùng nông thôn ở Nhật Bản. Hy vọng vào được một trường trung học với một câu lạc bộ bóng đá giỏi đã tan thành mây khói khi anh gây ra một sự cố trong một trận đấu quan trọng cho đội của mình, dẫn đến việc họ bị loại khỏi giải đấu. Tuy nhiên, anh đã lọt vào mắt xanh của một người quan trọng tình cờ đến thăm từ Tokyo. Mọi chuyện sẽ diễn ra như thế nào đối với Ashito?",
            "image": "https://s3-alpha-sig.figma.com/img/2fb6/7ff5/5e3abe50a16b45c46b38b61de4c3c1b2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tm6yaBX7bouYNEcd6F9JaC1OU-rspICNlPhQmotBHqW2ciWVgYXMRcKXmRq8uwPpUb6kh6hc~tj6BZr9lVktV7jAvhPYCmHAKFt2IZtQZ5mrjXn0mD8PlqdjBRXjV9EFYMIoN5uJePI5pkc7882W3dU88V09i63qG2eTv6AJL85Zw0XVYp~0hsa2q~86F7yb1LB1h20ANy~pXjg7o9tCyyXTn~BccZft5SjIG7ur-WP6l0fDSiv5SNQKjK4nE-onf8eGjCgyiky~ECw-h2j8tSAHQHHCeqBORlEU2EFVuswOMGph3UG-RtfbmtxsVng6LFoTxFnfet14WbDfKPa1yw__",
            "episode": "28"
        }
    ]


    return (
        <div>
            <div className='nav-bar'>
                <a href="http://localhost:5173/" className='logo'>Anonime</a>
                <ul className='nav-item-list'>
                    <li>Home</li>
                    <li>List anime</li>
                </ul>

                <input type="text" placeholder="Search anime or movie" className='search-bar' />
            </div>
            <Menu />
        </div>

    )
}

export default App
