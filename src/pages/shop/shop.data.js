const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://cdn.shopify.com/s/files/1/2624/7744/products/Jawa-Brown-Men-FeltHat-AmericanHatMakers-_5_900x900.jpg?v=1631647449',
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://i.pinimg.com/736x/f6/76/5f/f6765f1230db181312807974fcbb714c.jpg',
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://trailblazeroutlet.com/image/cache/b/r/brown_hat_photo_3_1-550x688h.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://cdn.shopify.com/s/files/1/1163/2604/files/cruz_mens_hats_large_head.jpg?v=1613521154',
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUZGRgYGBgYGBgYGBgYGRgYGBgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISHjQhISE1NDExNDQ0NTQxNDQxNDQ0MTY0NDExNDQ0NDQ0NTQxMTQ0NDQ0NDQ0NDQ0NDQ0NDQ0Mf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADwQAAIBAgQDBQcDAwIGAwAAAAECAAMRBBIhMQVBUQZhcYGREyIyQqGxwVLR8BRi4bLxIzOCkqLSFXKj/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJhEBAQEBAAEFAAEDBQAAAAAAAAERAhIDITFBUWEEInETMoGR8P/aAAwDAQACEQMRAD8A5ZBLKLMajjpepYwGaxzaKiEUSvSrKectIRCpKsIqx1EmqyBlWSyyYEkFgDCyQWTCyQWQQCR8sIBJZYaCAhVqMOcbLJBZARcS0KuK6iV7RASYbV1cSsmGUyhlj2jIurxoqYNsKJXVz1hFrN1k8WtO2FMgaB6QoxRhFxQ5iTxNVDTPSNll8VVMfKpkw1REUunDiQbC98mKqyJEO2HMiaZ6QK5WMRCssGyyCBEiRCESBgDYSDCFMiywoNooTLGhXENgTIHDMJ0ApQq4YGerXmxzyO6y3Q4gRvNZsAp5QL8MEuxMp6HERL9LFKecxn4cRtB+xdY8ZU8q6dKgMMs5eninXeXKPFOszea1Oo3wJILM2lxFTzltMUp5yWVZYsBY+WRWoIQMJlo2SPlkwZKALLHCwkUCForScRECAEe0e0QEKhaPJkRrQIWjgyVoisB1qHrCLiTAWj2mRZGK6iSGIWVQI9oaWwUMY4dTKlo4ciMNFfCdIF8KZIVj1kxiTzEmGqTUW6QbLNP+pHMRy6HpM4usjLHmp7BIow1yqCWFgkWWEE7uKSiEAjIsIFgRyCM2GB5QyrJCNXFF8CDylSrwscpuCLKInViXmOYfhzDaDyuvWdS1IGCfCg8pqd/rN4YNLHMN5fo8SHOGqcPB5SpU4b0l3mpnUaVLHA85aSuDObbCuu0S13WPCX4PKz5dSriTBnOUuJEby1T4mJm8VudxtRpRTGg84ZK4MzlXYsCIiRV5ItIpR40V4U8UUUBERWiBimVKK0RMYGA9orRs0cGFNljERy0iYEWEEwhGMGzQIRRs0UAVTh7ruL+EGEM6lHVhpYwVXAo3KWdfrF5/HPqJIGaFXhpG2sqvRI3FprYmWBxxHyRwIQ4khGAjiGjiPGigStGyCPHEgE9AGV3wg6S+BHl2pjFq8OvKr8PInRFYN0E1O6l4lZnCMOAWd/hQc9r2J18AL+YnN47tDWdyQxA+VRsByFp0w/5eKA3u4/8AxS04Ade8feJd2t3iSzn/AA7rhTs6j3znts1ipPTa4/mhl0YqxIIsRuP595zOBxGU91/54Tpiq1kGtnA91uvce77Tlz17+76H9X/STmeXEWFriEFQTnnd0NmBBEJT4hOt4/Hy/P6rfDR80ykxl+csJih1mbzY1OovXiLSsta8nnmcaFkSZBqkjmlE7xM8GWjEwJ55FngmaRzSYCs0A7mJ3kDtKp7xQGeKTAShiCNQbTWw3EyPi1nP05YQzdkc5bHV0MYjc4dqStOWR5foY1hzv4zF5anS9W4cDtKVTCMOU0KHEFO+kuKwaVcjnCkVpv1cIrcpRrcPI21jUxnRQj0iNxBmA4j3kbxZpQQNHzCBLRmaTBJ6gEGtdTsQfA3+05ztfiyKaoPnbXwXX72nGJiHQ3VyD1BI+01OR6ZgiPaVlPMo3kyZD/oM4CvTKMyHdSV8wbTZ7McUd6pV2uSmUE7m12F+tve9YPtRhstbONnF/wDqXRh9j5xPa46d++X+Ihh3uobu/wB5q4LG5d/53zEwL2S52uTM/FVi5JvoNvDr4zE58rY+t6n9Vzz6HNs22T2dRxXjgcKqAFhu55D9IA3/ABMpOKiwBuWvr7oAHeLHXw+vKYS1Dy57+ELSYbsL9B+868zxmR8Xuzrq2xvpxJMpJYZh8o3Otha/8Eoh2qNmqsQoNkRG1Y9wG/j9pnEFtvX9zufGbnDvZUwdS7O2hsL5SBYE9NzNb+seOfDRwGLdECte4v8AE2YgX0BbmbTQTG33MrmiCLjnKz0CJc5rG9StpMUvWFXEAzmyzCOuMIkvCzt0oeIvMBOIGW0xw6zN5sbncrTvIO0pjGiOte8z4rqxaQd5A1IFqkmLomYxQftIpMNJCZYSVUMMgm2FpWk0eBUyd4VZWpD0sQRsbSkskGmcXW1Q4ifml+likbYzmFqQi1rSYa6ZkVtxKlbhwPw6TPocRYd475oUeIq2+njJjTOr4Vl3EqsJ02YHvlXEYNG5WMumMDPIM8D2l4PVKXpknKcxVSVZhYiwI585zWE7ROi5KlN2ZdGa2U92ZSNGmp7s4j2yB9w8veHn7s5abfFse2IYAKFRbkXN216/sJS91BZfM85qRTYKqaTqw+IMPvt4TtOLYcV6HuatYOnUm2q+Y08ROCapc3/mu86vsvxC49kTqNU+5H59Znr510k3nPuOZznbW3T/ABHaa/afh+R/aKPcc622V+Y8Dv6yvwbhprvl2Uau3QcgO8y79ud1lZZJjfYa2t59Z32N4LTamEC5Quqld1PXvvzvvORx/B6tO50ZRzXcDqV5fWWdaWKVG41va3kYahiCDe3+B/PtAUkDI36l97xW9mHlcH1hKCX2t33IH+8JJbcjSGO1BI2vYj+7ceHd3CFPEX2RswI3PI+f8FpltRY8xbx1J6SKDXLtbfut+Y9mvDrfGz3rffFDKCx97pbfwK3H3k1QMNAQdLg7i4vr6zHp1VBOYAk/MeXjNPgNVXLgEtYJ7x5j3rAX10/Ms6rHXEmy/MM9K0Ebibr4UGUq2Gm51rlecZ61yIX+sjVMOZWelHss1bXGnnCrjAJkuINmMl5izptf/IiKYueKZ8WvJ1CG0Mjyoph1qCRFtHk88qCoJIPJhq0GMnfrKoePnjF1YLRB4ANGzxgsGrHFaVC946AnYX7hGGtGljGXZrfaW140barc9x0lKjw12390d+/pMTtHi/6d1QWdWWzg3DXP6TfoRy8D0mStTS7Q9panwISouMzra2wNlN9dxczkMRj3f4nJubm9hc2Aubb6AekDVZSxKgKCTYcgOQkDNSSKm9ck3udY61Cpvo3S4P2Bgidbek08NwtwhrPYKAxKm99rA28eUWpIhhsBVqi6qoS+9kQXGnyi5tLtLhbIwZHIYEG5HMRdn+IpTRw7EfDlFidNbgAban6yTYurXbLSUol7Fudu8/gTHvufTcyZZ8umpMlemQwBuMrqDsd9D6EGLguCGHTITckls36tdPpYWnL8MxPsKpyksl8r/wB1tyByN72/zO3XK6Ag3U2II+hEn8N9cWSX9ZvaPibUUXIAWckAnYAC5NuZ2nL0OJYioxTR8wNwVAAB0JutrbzqeK4EVkKNoym6t0bke8EGcrw+u2GrFaq2B0bnp8rr1G/+4mufhzqhicNUovY3VuTKTY6a2MWFaw25mdtisOjpqAysNOY12InB5GW/cSCPA2P2i+8b9K3nrYtV2up05fbX8QYrXsfXvtv+JFcQCLHTQj1FoFQSLAajW3dz/EczPl09b1N6llKtVzeE3Oy2mc//AFH+qc8J03Z3RGPVvsB+808vVvy6DPeNkkFeSNSEQqIJQr05cYmDyDnKjLfD90rVKNpuvaUa8umMnJFLXsoo1MX0aWE1lJHhkeQWlcSXtJWU3hUEIMrmTVjFh6DObKpPh+81sNwZvna3cNT+wktkWS1mAS3huHO+ym3U6CbmHwSJsuvU6mWM0zevxuc/rOocJUfGb9w0Eu2RBewUDc7fWVeI8Up0lLO2w+EbnoJxGK7QmobubdF+VfD95m7Xf0uOeuvHZP8ALrcbx5F0QZj1Oij8mcZxiu1V8zm9hYaAWHQQL8RB5j1ldsQp+Yff7SZX1PT9L0ePmz/mqVXDkG4Fx0gKjE7/AIsB0sNBNNcQg5/Q2lHGZc3u89dOXWb5t+K8X9T6PpyeXp2WfiXCXArITtmt/wBwKj6kTs+I0Q9JkvbMLX6TjMBgKlVv+GtyLHNsqnlczvf6QWBdr21PJR1/mkz18x5efhyvAeFJULl7nI+XKNAe8nfym5xAFEy00JJ91FRdu+w2tLHZmkAtSoBYVajugI1CE+7v11PnNbEVVAuxAHebSW/3NczI5PhvZ+o1s9kHebt6D8zqqWDFAIq/A+i3uSH1LA8gCNRtqD1mc3HaCGwbO36UGb67CbtHEpWplQ9iR8p95DyIvzBixu+peva/CtXp3FxuNu8dJl8R4clZMrrYj4XFrqfyO6ayOSDcEMpIPiD8Q7juPGctxtq1F8yOcjnTZsjbldRtzHpylZ548r47ilhq1TCt7Ot/yzfK2/8A1Lzt1X+GtxvC2YumqPrcagE/g/mRxGPd1yu2ZehVd+oIFwYLC4pqYKkZ6Z3U7rfe389Jd10vo9en7/M/hmIt947DKdPETTfBqwz0TnXmvzL5c/v47yp7Et7ttfDUHvEuseM659vlB0znMLZvmXY36i51m/wSiQmvMk/j8StgODX1cbfLqL+PSbdKmF0AsBsByE1HDqZ7VYRAJGowg3qwDveXGBGeDNSK+kE7QIvUMrlo9RpXdrS4C5o0q+0MUYatIYemDy1+58Jt4Ls4BrUe/cu3/cf2m7hcKiD3FA79z5k6mYvUanNrn8Hweo1rjIP7t/TebmG4Mi6tdj37ekugyniuK00vma5Hyrqf8eczvVXOZ8tBEAFgAB0GkZ6qqLkgDqTYTmcT2ic6IoUdTq3psPrMiti3c3ZiT3m9vDoJqenb8pfUk+HU4rjqL8ALH0Hrv9JjYnjLv81h0XT1O8ynqDcmUquL/T6/4m5xI53u1vHBLXw5AcBw9+oFhYKw3tqTec5ieD10OtMsOqe+P/HUeYErrjXRs6sQeoP075p4ftO4+NQ3fqp9Rp9JjrZXfjnnqe19/wCWUaLDdG81P7RvZufhRz4Ix+wnSJ2qTmGHg4P3tJHtRT/v9V/9o1v/AE7/AOrn6XB8Q+1NgOr2Qf8AlrNfAdmFFmqsG/sS+Xzbc+UlU7Tp8qEnvNvwZnYrj1Z9FGQd2/rH91+EyT5ro8TjqVBQugtsiAX9Bt5zA4hx56isiqFRgQeZIO4v3zJFNiddSf5rLVPDdfQROf1i9/UT/r67ae0e1rAKcoA6acohhi2rsT4kn6mWES22kIFl8Yzeur9mphVFlAlqnXI1B15G/wBoFEEcgdJUaWH4m6uHc5hYK5+bKL2Om9rnvtebeJoo6FWAZWGveNwQevMGcgzWl7hXF8nuOfc+Vv0dx/t+3htjqfcdeOv+2PxPANRfK2qnVW5MPweolKd5iVR1yuAynXf0KkbHvEwKfC8Nnyms9uYABt3Fh+0xHqnrzP7mVgME9R/+GrZv1KctvE7TdXA1E0qszdzKtuuhA97adXw3C00QCkBl6qb37yeZl72YIsRcdDErh315f7fZxqi28kW5fedFieEI3w+6e7UekycVwt1G1x1XX6bzrOpXC82M6oOcr3k6imBJtNYwk7wDPE7yrVeXDUqjyrUeMzwRlwPeKRikHqL11UZmYAdSQJkYvtIi/AC56/Cv11M46tinc3dix7zf06SAeYnE+2r1fptYrjNR/iew/Sug8+ZlH2sqB5LOBOk9mL7rXtO+QfEdPWU2qE/tEDLGaI7k6mDaPeNKgLJImnD2itJjU6VxSkhSEOFklp3k8V8qCEhkpX3hlpAeMmJcNMiW2EmBGvEXkw1MQgtKxrgbQTVmPOPE1eZwNzAviwNtZTJjR4nkI+IJ7oB9d48Src2jDRMNTJ90MwXmAxA9Jp0VCiwFhAogUWH88ZNTM41rRw2LZTdWIPdz/fzm1heOEaOtx+pdD5jb7Tmg1oVXP+8zeZVlsdxh8Yj/AAMCemx9DD3nAiqevhytNLCcbdNCc46MdfJt/W8l4/F8v10eJwCP8Si/UaH15+cxMZwBhqjZu46H12P0mjhuN0n0LZD0bTXubaX80kvUWyV55jqTobMpU9Dpfw6iZzmen16SuMrAMDyIuJg47szTbVCUPT4l9DqPWdJ1Pti81xTSBmrj+DVae63H6l94fuPOZRE0yaKRvHgMDHDQQaLNIopbvivBgxwZUTBkgYMGSmkwQGPBAwiwmFJhYhaPeDElWFBgA8YuYFjNImoIC8V4NTaoZAmNGMB7xRrxrwHMcRo14VIrLNCnb3j5eEDQFz95dYgiSkMDfaERJBJPNMtCLpv9Y7NbSCLQb1IBC8ga1pWerBF5UWGrGWsHxarTtkc2/SdV9OXlaZpMjmgdngu1CNpUGQ9Rqv7ibVLEI4zIwYdQQRPMs0nQxTocyMVPcfuOczeZ9NTq/b0szNx3CKVS+ZAD+pfdPn185h4LtQw0qLm/uXQ+Y2m/heJU6nwOCemx9DM5Y1srCbsoeVQ25XX/ADHnTZo0eVMjyoR7xRTbKQMe8UUqHvHEUUIkDHzRRQFmivFFNIe8e8UUBXj3iihCiiigNaMYooWFHAiimVW0Wwk1iigEEYtFFIoT1JXaoYopUQZo14ooDExiYooDXjXjxQHjg63Bseo3jRSLF8cXrDTO2nhFFFMtP//Z',
          price: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: 'data:image/jpeg;base64,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',
          price: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
          price: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: 'https://media1.popsugar-assets.com/files/thumbor/m2hsDAzsPQuhOpArFL-FZ9QAF5U/0x0:1500x2024/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2021/04/20/773/n/1922564/c9ce4a74607f107ac3b225.06048116_/i/Best-Women-Sneakers.jpg',
          price: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBR0U2E7WHvq3ejIxpwwFn_W5WIFPoo-baP1eq7YIsHZXIkTO6LtSwhgwhijBv4rsLmk&usqp=CAU',
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNb0Zin_ooaPbbCzy-OQ8U62ESAORjdkfO-cBwze1QbEGtH2wSDR0J-tbsVmJm5ngXCY&usqp=CAU',
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://n.nordstrommedia.com/id/sr3/62e2b069-2ccb-4de9-b674-5c06d4513527.jpeg?h=365&w=240&dpr=2',
          price: 90
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1617039708-denim-jackets-for-men-4-1617039699.jpg?crop=1xw:1xh;center,top&resize=480:*',
          price: 165
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1M0bEbhrvK1RjSszeq6yObFXa9/Spring-Summer-Dress-Women-2020-Beach-Party-Dress-Black-Clothes-Women-s-Dresses-Korean-Vintage-Dress.jpg_q50.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWasNtkDxJNQGKOjGuKNszm0XTgSXuLR5MX2NScsGLXnsGEezx9yzsx2nj9M4EaT2GXI&usqp=CAU',
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: 'https://www.dhresource.com/0x0/f2/albu/g10/M01/F4/E3/rBVaVl5pgleAdTtBAAKad2j0-PE405.jpg/spring-summer-dress-women-clothes-2020-korean.jpg',
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB18uyJJ9zqK1RjSZFpq6ykSXXaQ/2020-Elegant-Pink-Sexy-Dress-Korean-Bohemian-Beach-Party-Dress-Summer-Dress-Women-Clothes-Women-s.jpg_q50.jpg',
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Camo Down Vest',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1Jk.0KVXXXXb7XVXXq6xXFXXXz/Men-Shirt-For-Men-New-Arrival-Long-Sleeve-Fashion-Business-Slim-Formal-Casual-Spring-Autumn-Shirts.jpg',
          price: 325
        },
        {
          id: 2,
          name: 'Floral T-shirt',
          imageUrl: 'https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH5b2a0773e06840b2bb3b513cb92b595bF%2FCOODRONY-Brand-Sweater-Men-High-Quality-Casual-O-Neck-Pullover-Men-Clothes-2020-Autumn-Winter-Thick.jpg',
          price: 20
        },
        {
          id: 3,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg',
          price: 25
        },
        {
          id: 4,
          name: 'Pink T-shirt',
          imageUrl: 'https://images.asos-media.com/products/new-look-long-sleeve-poplin-shirt-in-khaki/14670411-1-khaki?$n_480w$&wid=476&fit=constrain',
          price: 25
        },
        {
          id: 5,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 6,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ]

  export default SHOP_DATA;