from django.shortcuts import render, redirect
from .models import Review
from .userModules import *



# Create your views here.
def home(request):
    profs = Review.objects.all()

    return render(request, 'index.html', {'profs': profs})

def about(request):
    return render(request, "about.html")

def contact(request):
    return render(request, "contact.html")

def form(request):
    return render(request, 'form.html')




#action to happen after form submition
def reviewSubmitted(request):
    if request.method == "POST":

        # profs = Review.objects.all()



        name = request.POST.get("name")
        teaching = int(request.POST.get("teaching"))
        evaluation = int(request.POST.get("evaluation"))
        behavior = int(request.POST.get("behavior"))
        internals = int(request.POST.get("internals"))
        class_average_marks = request.POST.get("class_average_marks")

        # getting particular prof details if exists
        prof = Review.objects.filter(name=name)

        if (prof):
            
            prof = prof[0]
            print(prof)
            teaching = (teaching + prof.teaching)/2
            evaluation = (teaching + prof.evaluation)/2
            behavior = (teaching + prof.behavior)/2
            internals = (teaching + prof.internals)/2

            classMarksList=prof.get_array()
            print(classMarksList)
            classMarksList.append(class_average_marks)
            prof.save_array(classMarksList)

        overallRating = ( (teaching*30) + (evaluation*30) + (behavior*25) + (internals*15) ) / 100

        if (overallRating >= 4):
            overall = "GOOD"
            color = "#00ff00"

        elif (overallRating >=2 and overallRating<= 4):
            overall="average"
            color = "yellow"

        else:
            overall = "BAD"
            color = "red"

        if (prof):
            prof.name = name
            prof.teaching=teaching
            prof.evaluation=evaluation
            prof.behavior=behavior
            prof.internals=internals
            prof.overall=overall
            prof.color=color
            prof.count = prof.count +1

            class_average_marks = calculate_mode(classMarksList)[0]
            print(class_average_marks)

            prof.class_average_marks = class_average_marks




            prof.save()

        else:
            Review_instance = Review(
                name=name, 
                teaching=teaching,
                evaluation=evaluation,
                behavior=behavior,
                internals=internals,
                class_average_marks=class_average_marks,
                overall=overall,
                color=color)
            
            Review_instance.count = Review_instance.count + 1
            Review_instance.save_array([class_average_marks])
            

            #saving the details in the database
            Review_instance.save()

        return redirect('/form')