//******************** Added By Abhishek - displaying teachers with their properties*********

          // Creating an object for the details of each teacher
          const PROFFESSORS = {
            //'Suresh Dara': ["Awesome Teacher, Go with him for sure","#00ff00"],

            'Priyank Nema':{
              'Teaching': '4.5/5',
              'Evaluation': '4/5',
              'Behaviour': '4.5/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Manoj Acharya':{
              'Teaching': '4/5',
              'Evaluation': '3/5',
              'Behaviour': '3/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Ujjwal Kumar Mishra':{
              'Teaching': '2/5',
              'Evaluation': '1/5',
              'Behaviour': '4/5',
              'Internals': '4/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'red',
            },

            'Aanjan Kumar':{
              'Teaching': '3/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Chandrama Swain':{
              'Teaching': '4.5/5',
              'Evaluation': '3.5/5',
              'Behaviour': '4/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
           
            'Satyam Ravi':{
              'Teaching': '4.3/5',
              'Evaluation': '4.6/5',
              'Behaviour': '5/5',
              'Internals': '4.3/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Govind Prasad Pandya':{
              'Teaching': '4/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '3/3',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Saurabh Bhargava':{
              'Teaching': '4/5',
              'Evaluation': '3/5',
              'Behaviour': '3/5',
              'Internals': '4/5',
              'Average': 'Low',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Suchismita Patra':{
              'Teaching': '3.5/5',
              'Evaluation': '2.5/5',
              'Behaviour': '3/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Pooja Lalwani':{
              'Teaching': '2/5',
              'Evaluation': '4/5',
              'Behaviour': '4/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Ravi Bhatt':{
              'Teaching': '4.6/5',
              'Evaluation': '3.3/5',
              'Behaviour': '4/5',
              'Internals': '3.6/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Sharmila Joseph':{
              'Teaching': '1/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Dondu Harish':{
              'Teaching': '1/5',
              'Evaluation': '3/5',
              'Behaviour': '3/5',
              'Internals': '3/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'red',
            },

            'S. Periyanagi':{
              'Teaching': '5/5',
              'Evaluation': '4/5',
              'Behaviour': '3/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Rajdeep Singh Payal':{
              'Teaching': '2.5/5',
              'Evaluation': '2/5',
              'Behaviour': '5/5',
              'Internals': '2/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'red',
            },

            'D.S Devraju':{
              'Teaching': '4/5',
              'Evaluation': '3/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Virendra Singh Kushwaha':{
              'Teaching': '3.5/5',
              'Evaluation': '2.5/5',
              'Behaviour': '4/5',
              'Internals': '3.5/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },


            'Arindam Gosh':{
              'Teaching': 'Good',
              'Evaluation': 'Good',
              'Behaviour': 'Medium',
              'Internals': 'Good',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
            
            'Hemant Nashine':{
              'Teaching': '4/5',
              'Evaluation': '3/5',
              'Behaviour': '3/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Anita Yadav':{
              'Teaching': '2.6/5',
              'Evaluation': '3.6/5',
              'Behaviour': '4/5',
              'Internals': '3.6/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Nikhil Pateria':{
              'Teaching': '2.8/5',
              'Evaluation': '2/5',
              'Behaviour': '3.2/5',
              'Internals': '2.2/5',
              'Average': 'Medium',
              'Overall': 'Bad',
              'Color': 'red',
            },

            'Bhavana Bhagerwal':{
              'Teaching': '4/5',
              'Evaluation': '4/5',
              'Behaviour': '4.5/5',
              'Internals': '3.75/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Ankit Pal':{
              'Teaching': '4/5',
              'Evaluation': '1.25/5',
              'Behaviour': '3.5/5',
              'Internals': '3.5/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Javed Khan':{
              'Teaching': '5/5',
              'Evaluation': '4.5/5',
              'Behaviour': '4/5',
              'Internals': '4.2/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Priyanka Roy':{
              'Teaching': '2/5',
              'Evaluation': '1/5',
              'Behaviour': '3/5',
              'Internals': '3/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'red',
            },

            'KK Nair':{
              'Teaching': '5/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Vinod Bhatt':{
              'Teaching': '5/5',
              'Evaluation': '3.6/5',
              'Behaviour': '4.3/5',
              'Internals': '3.6/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Ashok Kumar Baral':{
              'Teaching': '2.6/5',
              'Evaluation': '3.6/5',
              'Behaviour': '3.6/5',
              'Internals': '4.3/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },
            
            'Rajeev Saxena':{
              'Teaching': '5/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Good',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
            
            'Suresh Dara':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Aakash Saxena':{
              'Teaching': '3/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Soma Saha':{
              'Teaching': '3/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Rabia Musheer':{
              'Teaching': '5/5',
              'Evaluation': '5/5',
              'Behaviour': '4.6/6',
              'Internals': '4.6/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Kirti Chaudhary':{
              'Teaching': '5/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Good',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Bhumika Choksi':{
              'Teaching': '3/5',
              'Evaluation': '4/5',
              'Behaviour': '3/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Palash Jain':{
              'Teaching': '5/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Siddharth K.V':{
              'Teaching': '3/5',
              'Evaluation': '2/5',
              'Behaviour': '2/5',
              'Internals': '2/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'Red',
            },

            'Lokesh Malviya':{
              'Teaching': '3.3/5',
              'Evaluation': '3.3/5',
              'Behaviour': '4.3/5',
              'Internals': '3.6/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },
            
            'Sucheta Sadukhan':{
              'Teaching': '3/5',
              'Evaluation': '4.5/5',
              'Behaviour': '4/5',
              'Internals': '3.5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Sandeep Sahu':{
              'Teaching': '3/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            
            'Akshay Jadav':{
              'Teaching': '5/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            
            'P. Narendra Babu':{
              'Teaching': '3.3/5',
              'Evaluation': '3.3/5',
              'Behaviour': '2/5',
              'Internals': '2.6/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'Red',
            },
            
            
            'Uday Kumar':{
              'Teaching': '3/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Low',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Arindham Ghosh':{
              'Teaching': '5/5',
              'Evaluation': '4.5/5',
              'Behaviour': '5/5',
              'Internals': '4.5/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Sadanand Singh':{
              'Teaching': '5/5',
              'Evaluation': '3/5',
              'Behaviour': '3/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'Orange',
            },

            'Sana Afreen':{   
              'Teaching': '1.5/5',
              'Evaluation': '3/5',
              'Behaviour': '2.5/5',
              'Internals': '3.5/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'Orange',
          },
          
          'Yogesh Shukla':{
              'Teaching': '4/5',
              'Evaluation': '4/5',
              'Behaviour': '3/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'Orange',
            },
          
          'Ramesh Saha':{
              'Teaching': '1/5',
              'Evaluation': '1/5',
              'Behaviour': '1/5',
              'Internals': '1/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'Red',
            },
          
            'Anil Kumar Shukla':{
              'Teaching': '1/5',
              'Evaluation': '4/5',
              'Behaviour': '3/5',
              'Internals': '1/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'Red',
            },
          
            'Shweta Mukherjee':{
              'Teaching': '5/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
            'Harish Chandra':{   
              'Teaching': '2.5/5',
              'Evaluation': '4/5',
              'Behaviour': '4/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'Orange',
            },
          
            'Ajay Kumar Bhurjee':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
          
          'Rouf Khan':{
              'Teaching': '5/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
          'Sughvanewshar Ramu Pasupathi':{
              'Teaching': '3/5',
              'Evaluation': '5/5',
              'Behaviour': '4/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
          
          'Suresh Babu':{
              'Teaching': '4/5',
              'Evaluation': '1/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'Low',
              'Overall': 'Average',
              'Color': 'Orange',
            },
          
            'Mayank Sharma':{
              'Teaching': '2/5',
              'Evaluation': '2/5',
              'Behaviour': '1/5',
              'Internals': '3/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'Red',
            },
          
          
            'Pranjali Malviya':{   //add average and all
              'Teaching': '1/5',
              'Evaluation': '1/5',
              'Behaviour': '2.5/5',
              'Internals': '2/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'Red',
            },
          
          
            'Nilam Venkateshwarao':{
              'Teaching': '4/5',
              'Evaluation': '4/5',
              'Behaviour': '4/5',
              'Internals': '3/5',
              'Average': 'Low',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
            'Vijay Kumar Patel':{  
              'Teaching': '3/5',
              'Evaluation': '5/5',
              'Behaviour': '4/5',
              'Internals': '5/5',
              'Average': 'Low',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
            'Pradeep':{
              'Teaching': '5/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
            'Yogita Dwivedi':{  
              'Teaching': '4/5',
              'Evaluation': '4/5',
              'Behaviour': '3.5/5',
              'Internals': '4.5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
          
            'Anant Kumar Shukla':{
              'Teaching': '5/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'Low',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
            'Jyoti':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
            'Shiju E':{
              'Teaching': '5/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
            'JP Shritharanya':{
              'Teaching': '1/5',
              'Evaluation': '1/5',
              'Behaviour': '1/5',
              'Internals': '1/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'Red',
            },
          
            'Pradeep Kumar Mishra':{
              'Teaching': '5/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
            'Anirban Bhowmik':{ 
              'Teaching': '4.33/5',
              'Evaluation': '3.66/5',
              'Behaviour': '3.66/5',
              'Internals': '3.66/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
            'Mayuri Kailas':{
              'Teaching': '5/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
          
            'Saurav Prasad':{
              'Teaching': '5/5',
              'Evaluation': '4.5/5',
              'Behaviour': '5/5',
              'Internals': '4.5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },          

            'K Pallavi':{
              'Teaching': '1/5',
              'Evaluation': '2/5',
              'Behaviour': '1/5',
              'Internals': '2/5',
              'Average': 'Medium',
              'Overall': 'Bad',
              'Color': 'Red',
            },

            'Avirup Das':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '4/5',
              'Internals': '5/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Sumit Mittal':{
              'Teaching': '4.5/5',
              'Evaluation': '4.5/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Priyanka Roy':{
              'Teaching': '3/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'G Prabhu Kannan':{
              'Teaching': '3/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Ajay Kumar Bhurjee':{
              'Teaching': '2/5',
              'Evaluation': '4/5',
              'Behaviour': '3/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'Orange',
            },

            'Ranju Yadav':{
              'Teaching': '4/5',
              'Evaluation': '3/5',
              'Behaviour': '4/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'Orange',
            },
            'Prashant Kumar Pandey':{
              'Teaching': '3.75/5',
              'Evaluation': '3.75/5',
              'Behaviour': '4.25/5',
              'Internals': '4/5',
              'Average': 'Low',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Dipankar Sutradhar':{
              'Teaching': '3/5',
              'Evaluation': '5/5',
              'Behaviour': '4.5/5',
              'Internals': '5/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
            'Divya Haridas':{
              'Teaching': '5/5',
              'Evaluation': '2/5',
              'Behaviour': '4/5',
              'Internals': '4/5',
              'Average': 'Low',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Amit Thakur':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Dipankar Surthal':{
              'Teaching': '5/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Ribu Mathew':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Abhishek Shrivastav':{
              'Teaching': '2/5',
              'Evaluation': '3/5',
              'Behaviour': '3/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Bas',
              'Color': 'Red',
            },

            'Arpita Banoria':{
              'Teaching': '2/5',
              'Evaluation': '2/5',
              'Behaviour': '3/5',
              'Internals': '5/5',
              'Average': 'High',
              'Overall': 'Average',
              'Color': 'Orange',
            },

            'S Saravanan':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '4/5',
              'Internals': '4/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Baseera A':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '4/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Reena Jain':{
              'Teaching': '5/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Hemlatha Gangwar':{
              'Teaching': '2/5',
              'Evaluation': '2/5',
              'Behaviour': '1/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Bad',
              'Color': 'Red',
            },

            'R.P Sugavaneshwar':{
              'Teaching': '2/5',
              'Evaluation': '1/5',
              'Behaviour': '1/5',
              'Internals': '2/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'Red',
            },

            'Pradeep Kashyap':{
              'Teaching': '1.3/5',
              'Evaluation': '1.6/5',
              'Behaviour': '2.6/5',
              'Internals': '2.6/5',
              'Average': 'Low',
              'Overall': 'Bad',
              'Color': 'Red',
            },

            'Karishma Tiwari':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'M.R Thiyagu Priyadarshan':{
              'Teaching': '1/5',
              'Evaluation': '1/5',
              'Behaviour': '2/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Bad',
              'Color': 'Red',
            },

            'Benevatho Jaison A':{
              'Teaching': '4/5',
              'Evaluation': '4.6/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Rajit Nair':{
              'Teaching': '3/5',
              'Evaluation': '3/5',
              'Behaviour': '5/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'Orange',
            },
            
            'Praveen Kumar Lalwani':{
              'Teaching': '3/5',
              'Evaluation': '2.5/5',
              'Behaviour': '3/5',
              'Internals': '5/5',
              'Average': 'High',
              'Overall': 'Average',
              'Color': 'Orange',
            },

            'Sonali Shrivastav':{
              'Teaching': '4/5',
              'Evaluation': '3/5',
              'Behaviour': '4/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
            
            'Shahid Abdullah':{
              'Teaching': '5/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Shahid Abdullah':{
              'Teaching': '5/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Soumya Sanskar Ghosh':{
              'Teaching': '3/5',
              'Evaluation': '3/5',
              'Behaviour': '4/5',
              'Internals': '3/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Neha Choubey':{
              'Teaching': '4/5',
              'Evaluation': '2/5',
              'Behaviour': '3/5',
              'Internals': '4/5',
              'Average': 'Low',
              'Overall': 'Average',
              'Color': 'orange',
            },
            
            'Pavan Mehta':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Shweta Saxena':{
              'Teaching': '1/5',
              'Evaluation': '2/5',
              'Behaviour': '1/5',
              'Internals': '2/5',
              'Average': 'Medium',
              'Overall': 'Bad',
              'Color': 'red',
            },

            'Mamta Agarwal':{
              'Teaching': '4.5/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4.5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Anand Motwani':{
              'Teaching': '4.6/5',
              'Evaluation': '4/5',
              'Behaviour': '4/5',
              'Internals': '5/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Divya Thakur':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Divya Thakur':{
              'Teaching': '4/5',
              'Evaluation': '5/5',
              'Behaviour': '5/5',
              'Internals': '5/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'Abhay Vidyarthi':{
              'Teaching': '4/5',
              'Evaluation': '4/5',
              'Behaviour': '5/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Good',
              'Color': '#00ff00',
            },

            'E Nirmala':{
              'Teaching': '3/5',
              'Evaluation': '3/5',
              'Behaviour': '3/5',
              'Internals': '4/5',
              'Average': 'Medium',
              'Overall': 'Average',
              'Color': 'orange',
            },

            'Shilpa Suman':{
              'Teaching': '3/5',
              'Evaluation': '5/5',
              'Behaviour': '4/5',
              'Internals': '5/5',
              'Average': 'High',
              'Overall': 'Good',
              'Color': '#00ff00',
            },
                    

          };

          //capturing the selected value in the dropdown
          document.getElementById("submit").addEventListener('click', function () {
            let dropdown = document.getElementById("dropdown");
            let selectedProf = dropdown.value;
          
            // checking whether the selected Proffessors detail is present in our Object or not
            if( selectedProf in PROFFESSORS){
              let selectedOption = document.getElementById("selectedOption");
              let Teaching = PROFFESSORS[selectedProf]['Teaching'];        
              let Evaluation = PROFFESSORS[selectedProf]['Evaluation'];
              let Behaviour = PROFFESSORS[selectedProf]['Behaviour'];
              let Internals = PROFFESSORS[selectedProf]['Internals'];
              let Average = PROFFESSORS[selectedProf]['Average'];
              let Overall = PROFFESSORS[selectedProf]['Overall'].toUpperCase();
              let Color = PROFFESSORS[selectedProf]['Color'];

              
              
            //   Fetching Review of the selected Proffessor
              selectedOption.innerHTML = `Teaching: ${Teaching} <br>
              Evaluation : ${Evaluation} <br>
              Behaviour : ${Behaviour} <br>
              Internals : ${Internals} <br>
              Average : ${Average} <br><br>
              Overall : ${Overall} <br>`
              
              ;
              selectedOption.setAttribute("style", `background-color:${Color};`);

              
          }
          else{
            let selectedOption = document.getElementById("selectedOption");
            selectedOption.innerHTML = `Please Select a Professor from the above Dropdown list`;
            selectedOption.setAttribute("style", `color: #f0ff00;`);
          }
          })



