let names = [
    'Amit', 'Suresh', 'Naresh', 'Jitesh', 'Kumesh', 'Raj', 'rajesh', 'Ajit', 'Pushkar', 'Aman',
    'Ramesh', 'Hitesh', 'Ganesh', 'Mahesh', 'Mukesh', 'Dinesh', 'Nilesh', 'Jayesh', 'Yogesh', 'Santosh',
    'Rajesh', 'Girish', 'Harish', 'Navin', 'Pankaj', 'Vikas', 'Sachin', 'Rohan', 'Rahul', 'Arjun',
    'Karan', 'Ankit', 'Mohit', 'Rohit', 'Sumit', 'Lalit', 'Vinod', 'Kamal', 'Akash', 'Deepak',
    'Sunil', 'Vivek', 'Brijesh', 'Jinesh', 'Vinesh', 'Rakesh', 'Abhilash', 'Devendra', 'Jitendra', 'Surendra',
    'Ravindra', 'Narendra', 'Virendra', 'Dheeraj', 'Pankaj', 'Rakesh', 'Rajesh', 'Ganesh', 'Dinesh', 'Mahesh',
    'Yogesh', 'Jayesh', 'Nilesh', 'Hitesh', 'Mukesh', 'Santosh', 'Girish', 'Harish', 'Navin', 'Pankaj',
    'Vikas', 'Sachin', 'Rohan', 'Rahul', 'Arjun', 'Karan', 'Ankit', 'Mohit', 'Rohit', 'Sumit',
    'Lalit', 'Vinod', 'Kamal', 'Akash', 'Deepak', 'Sunil', 'Vivek', 'Brijesh', 'Jinesh', 'Vinesh',
    'Rakesh', 'Abhilash', 'Devendra', 'Jitendra', 'Surendra', 'Ravindra', 'Narendra', 'Virendra', 'Dheeraj', 'Pankaj',
    'Ramesh', 'Hitesh', 'Ganesh', 'Mahesh', 'Mukesh', 'Dinesh', 'Nilesh', 'Jayesh', 'Yogesh', 'Santosh',
    'Rajesh', 'Girish', 'Harish', 'Navin', 'Pankaj', 'Vikas', 'Sachin', 'Rohan', 'Rahul', 'Arjun',
    'Karan', 'Ankit', 'Mohit', 'Rohit', 'Sumit', 'Lalit', 'Vinod', 'Kamal', 'Akash', 'Deepak',
    'Sunil', 'Vivek', 'Brijesh', 'Jinesh', 'Vinesh', 'Rakesh', 'Abhilash', 'Devendra', 'Jitendra', 'Surendra',
    'Ravindra', 'Narendra', 'Virendra', 'Dheeraj', 'Pankaj', 'Aakash', 'Amit', 'Ashish', 'Brijesh', 'Bhavesh',
    'Abhinav', 'Aditya', 'Adarsh', 'Akshay', 'Anil', 'Arvind', 'Ashok', 'Atul', 'Avinash', 'Bhavin',
    'Chetan', 'Chandan', 'Darshan', 'Dhruv', 'Gautam', 'Gopal', 'Govind', 'Hemant', 'Inderjit', 'Jagdish',
    'Jai', 'Jatin', 'Kiran', 'Kishan', 'Kishore', 'Lokesh', 'Manoj', 'Manish', 'Mayank', 'Mihir',
    'Naresh', 'Neeraj', 'Nikhil', 'Nitin', 'Pradeep', 'Prakash', 'Prashant', 'Pranav', 'Prem', 'Rahul',
    'Sandeep', 'Sanjay', 'Satish', 'Sharad', 'Shiva', 'Siddharth', 'Subhash', 'Sudhir', 'Suman', 'Suraj',
    'Tushar', 'Uday', 'Utkarsh', 'Varun', 'Vinay', 'Vinayak', 'Vishal', 'Yash', 'Yashpal', 'Yuvraj'
];
console.log(names)


//normal way to access the data of array

document.writeln(`
    ${names[0]}<br>
    ${names[1]}<br>
    ${names[2]}<br>
    ${names[3]}<br>
    ${names[4]}<br>
    ${names[5]}<br>
    ${names[6]}<br>
    ${names[7]}<br>
    ${names[8]}<br>
    ${names[9]}<br>
    `)


// access the data of array through loop with predefined length
for(let i =0;i<=names.length;i++){
    document.writeln(`${names[i]} <br>`)
}

// access the data of array using foreach loop
names.forEach(function(name){
    console.log(name)
})