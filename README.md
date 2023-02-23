## My Blog by Aziz Jabbar Shiddiq

To access the website, open link: https://my-blog-aziz.vercel.app

This website only use light mode theme, so if you have dark mode on please turn it off to avoid coloring error

## About

This project created by Aziz Jabbar Shiddiq with Next.js, a react front-end framework made by Vercel.

This project only contains front-end, while for the back-end I used the data from public api https://gorest.co.in/

To run Next.js application on localhost, open the terminal and cd to project, then type `npm run dev`. It should be deployed on localhost:3000.

## Features

#### 1. Posts List

Open "/posts" or click "Posts" on navbar to access posts list

![Posts List](https://i.ibb.co/K9pcK2H/image-2023-02-23-233857235.png)

#### 2. Post Detail

You can click on each post and see the detail of the post. There is comment section on the bottom.

![Post Detail](https://i.ibb.co/T0FHd0t/image-2023-02-23-233706752.png)

#### 3. Users List

Open "/users" or click "Users" on navbar to access users list
![Users list](https://i.ibb.co/3s6yL93/image-2023-02-23-234216329.png)

#### 4. User Detail

You can see the user detail by clicking on green button with eye icon on each row of user.
![User detail](https://i.ibb.co/YPPkp2f/image-2023-02-23-234406082.png)

#### 5. Add user

You can add user by clicking "Add user" button on users list page. You will get form to fill-in the user detail. After filling the detail, you can click "Submit"
![Add user](https://i.ibb.co/8KDPd54/image-2023-02-23-234628424.png)

#### 6. Update user

You can update user by clicking blue button with pencil icon on each users row. You will get form to fill-in the user detail. After filling the detail, you can click "Submit"
![Update user](https://i.ibb.co/0qNjsLM/image-2023-02-23-234801583.png)

#### 7. Delete user

You can delete a user by clicking the red button with trash icon on each users row. You will get confirmation alert to delete the user. If you confirm, the user will be deleted.
![Delete user confirmation](https://i.ibb.co/x10Jz80/image-2023-02-23-235002892.png)

#### 8. Search user

You can use search box to search for users. It will perform search while you type, so you don't need to press enter or click a button.
![Search user](https://i.ibb.co/Xy8gWY0/image-2023-02-23-235156560.png)
Note: This feature use async method with state
