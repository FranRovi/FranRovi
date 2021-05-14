from django.shortcuts import render, redirect
from .models import User, Severance
from django.contrib import messages
import bcrypt
import requests 

# Create your views here.

def login(request):
    return render(request, "login.html")

def loginProcess(request):
    user_list = User.objects.filter(email = request.POST["email"])
    if len(user_list) == 0:
        messages.error(request, "The mail provided has not been registered yet")
        return redirect("/")
    else:
        logged_user = user_list[0]
        if bcrypt.checkpw(request.POST["password"].encode(), logged_user.password.encode()):
            request.session["user_id"] = logged_user.id
        return redirect("/dashboard")

def register(request):
    return render(request, "register.html")

def registerProcess(request):
    print(request.POST)
    errors = User.objects.validate_registration(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/register")
    else:
        hash_pwd = bcrypt.hashpw(request.POST["password"].encode(), bcrypt.gensalt()).decode()
        new_user = User.objects.create(
            first_name = request.POST["first_name"],
            last_name = request.POST["last_name"],
            nickname = request.POST["nickname"],
            email = request.POST["email"],
            zip_code = request.POST["zip_code"],
            password = hash_pwd
        )
        request.session["user_id"] = new_user.id
        return redirect("/dashboard")

def dashboard(request):
    user = User.objects.get(id=request.session["user_id"])
    zipcode = user.zip_code
    r = requests.get(f"http://api.openweathermap.org/data/2.5/weather?zip={zipcode},&appid=5bcea18b7edb168213127eaa32f6b8b3&units=imperial")
    # print(r.json())
    context={
        "logged_user": user,
        "weather":r.json()
    }
    return render(request, "dashboard.html",context)

def calculationProcess(request):
    # print(request.POST)
    errors = Severance.objects.validate_severance(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/dashboard")
    else:
        new_calculation = Severance.objects.create(
            author = User.objects.get(id=request.session["user_id"]),
            name = request.POST["name"],
            salary = request.POST["salary"],
            start_date = request.POST["start_date"],
            end_date = request.POST["end_date"],
            jurisdiction = request.POST["jurisdiction"],
            reason_for_termination = request.POST["reason_employ_term"]
        )
        new_calculation.calc_severance()
        new_calculation.save()
        print("new_calculation: ", new_calculation)
        return redirect("/dashboard")

def detailsCalculation(request, sev_id):
    one_sev = Severance.objects.get(id=sev_id)
    context={
        "one_calc": one_sev
    }
    return render(request, "calculationDetails.html", context)

def editCalculation(request, sev_id):
    context = {
        "edit_calc":Severance.objects.get(id=sev_id),
        "logged_user":User.objects.get(id=request.session["user_id"])
    }
    return render(request, "calculationEdit.html", context)

def editProcess(request, sev_id):
    one_sev = Severance.objects.get(id=sev_id)
    errors = Severance.objects.validate_severance(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f"/calculationEdit/{sev_id}")
    else:
        calc_to_update = Severance.objects.get(id=sev_id)
        calc_to_update.name = request.POST["name"]
        calc_to_update.salary = request.POST["salary"]
        calc_to_update.start_date = request.POST["start_date"]
        calc_to_update.end_date = request.POST["end_date"]
        calc_to_update.reason_for_termination = request.POST["reason_employ_term"]
        calc_to_update.jurisdiction = request.POST["jurisdiction"]
        calc_to_update.calc_severance()
        calc_to_update.save()
        return redirect(f"/calculationDetails/{calc_to_update.id}")

def deleteCalculation(request, sev_id):
    delete_calc = Severance.objects.get(id=sev_id)
    delete_calc.delete()
    return redirect("/dashboard")

def logout(request):
    request.session.clear()
    return redirect("/")




# def calculationProcess(request):
#     return render(request, "dashboard.html")

# def runCalculation(request):
#     errors = check_for_errors()

#     if errors:
#         # send mesage

#     else:
#         # create
#         obj = Severance.objects.create()
#         # calculate
#         obj.run_calculations() # Can it save the info?
#         # save
#         # obj = Severance.objects.get(id=...)s
#         obj.save()

def calculationsDetails(request):
    # check for errors
    
    return render(request, "calculationDetails.html")
