from django.db import models
from datetime import datetime as dt
import re
import math

# Create your models here.
class UserManager(models.Manager):
    def validate_registration(self, postData):
        errors = {}
        if len(postData["first_name"]) < 2:
            errors["first_name"] = "First Name must be at least two characters long"
        if len(postData["last_name"]) < 2:
            errors["last_name"] = "Last Name must be at least two characters long"
        email_regex_pattern = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
        if not email_regex_pattern.match(postData["email"]):
            errors["email"] = "Email provided is not valid. Please check the one given or provide a new one"
        user_list = User.objects.filter(email = postData["email"])
        if len(user_list) > 0:
            errors["email"] = "Email already exists, please register with a new one"
        if len(postData["password"]) < 8:
            errors["password"] = "Password must be at least 8 characters long"
        if postData["password"] != postData["confirm_password"]:
            errors["confirm_password"] = "Password and confirm password doesn't match"
        if not len(postData["zip_code"]) == 5:
            errors["zip_code"] = "Zip code must be 5 digits long"
        return errors


class SeveranceManager(models.Manager):
    def validate_severance(self, postData):
        errors = {}
        if len(postData["name"]) < 2:
            errors["name"] = "First Name must be at least two characters long"
        if postData["salary"] <= str(0):
            errors["salary"] = "Salary should be a float number higher higher than zero"
        if postData["reason_employ_term"] not in ("Resignation", "Wrongful dismissal"):
            errors["reason_employ_term"] = "You must choose a reason for employment termination"
        if postData["jurisdiction"] not in ("Capital City", "Buenos Aires Province"):
            errors["jurisdiction"] = "You must choose a jurisdiction"
        # if   check start date and end date
        # start_date = dt.datetime(postData["start_date"])
        # end_date = dt.datetime(postData["end_date"])
        # if end_date <= start_date:
        #     errors["time_delta"] = "End date must be greater than start date"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length = 100)
    last_name = models.CharField(max_length = 100)
    nickname = models.CharField(max_length = 50, null=True)
    email = models.CharField(max_length = 255)
    zip_code = models.IntegerField()
    password = models.CharField(max_length = 255)
    objects = UserManager()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    # severances = List of calculations

class Severance(models.Model):
    name = models.CharField(max_length=255)
    salary = models.DecimalField(max_digits=19, decimal_places=2)
    start_date = models.DateField()
    end_date = models.DateField()
    jurisdiction = models.CharField(max_length=100)
    int_rate = models.DecimalField(max_digits=17, decimal_places=2, null=True)
    reason_for_termination = models.CharField(max_length=100)
    total_relation_duration = models.IntegerField(null=True)
    relation_duration_years = models.IntegerField(null=True)
    relation_duration_months = models.IntegerField(null=True)
    relation_duration_days = models.IntegerField(null=True)
    comp_seniority = models.DecimalField(max_digits=17, decimal_places=2, null=True)
    comp_advance_notice = models.DecimalField(max_digits=17, decimal_places=2, null=True) 
    days_complete_month = models.DecimalField(max_digits=17, decimal_places=2, null=True)
    days_month_worked = models.DecimalField(max_digits=17, decimal_places=2, null=True)
    total = models.DecimalField(max_digits=17, decimal_places=2, null=True)
    author = models.ForeignKey(User, related_name="severances", on_delete = models.CASCADE)
    objects = SeveranceManager()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def calc_severance(self):
        print("Calculating severance")
        self._calc_relation_duration()
        self._comp_seniority()
        self._comp_advance_notice()
        self._comp_total()

    def _calc_relation_duration(self):
        """
        calculates the duration of the employment relationship in years, months, days format
        """
        date_format = "%Y-%m-%d"
        start_date = dt.strptime(str(self.start_date), date_format)
        end_date = dt.strptime(str(self.end_date), date_format)
        delta = end_date - start_date
        self.total_relation_duration = delta.days
        # print("total_relation_duration: ", self.total_relation_duration)

        self.relation_duration_years = math.floor(self.total_relation_duration / 365)
        self.relation_duration_months = math.floor((self.total_relation_duration - self.relation_duration_years * 365) / 30)
        self.relation_duration_days = math.floor(self.total_relation_duration - ((self.relation_duration_years * 365) + (self.relation_duration_months * 30)))
    
    def _comp_seniority(self):
        years_worked = self.relation_duration_years
        if self.relation_duration_months > 3:
            years_worked += 1
        self.comp_seniority = years_worked * float(self.salary)

    def _comp_advance_notice(self):
        years_worked = self.relation_duration_years
        if years_worked < 5:
            self.comp_advance_notice = float(self.salary)
        else:
            self.comp_advance_notice = float(self.salary) * 2

    def _comp_total(self):
        self.total = self.comp_seniority + self.comp_advance_notice





















#         """Calculates the different seniority dates for compensation calculations
#         """
#         start_date_dt = date.fromisoformat(self.seniority["start_date"])
#         end_date_dt = date.fromisoformat(self.seniority["end_date"])
#         worked_days = (end_date_dt - start_date_dt).days

#         years = math.floor(worked_days/365)
#         months = math.floor((worked_days - (years * 365)) / 30)
#         days = (worked_days - ((years * 365) + (months * 30)))

#         days_last_year = (end_date_dt - date.fromisoformat(f"{end_date_dt.year}-01-01")).days

#         self.seniority.update({"total_days_worked": worked_days})
#         self.seniority.update({"years_worked" : years})
#         self.seniority.update({"months_worked": months})
#         self.seniority.update({"days_worked": days})
#         self.seniority.update({"days_worked_end_year": days_last_year})















    # def relation_duration():
    #     dict_rd = {}

    #     return


    # def make_calculation(self):
    #     total = 
    #     return {
    #         total: 50000
    #         antiguedad:
    #     }

    # def _calc_antiguedad():
    #     ...

    # def _calc_remuneracion_por_antiguedad():
    #     ...

# #
# import math
# import json
# from datetime import date
# import numbers

# class Severance:
    
#     def __init__(self, filename):
#         try:
#             with open(filename, "r") as f:
#                 data = json.load(f)
#         except FileNotFoundError as e:
#             raise FileNotFoundError(f"File {filename} Not Found.")
#         except json.JSONDecodeError as e:
#             raise ValueError(f"File {filename} is not a valid json.")

#         self.validate(data)
        
#         self.salary = data["salary"]
#         self.motif = data["motif"]
#         self.seniority = {
#             "start_date": data["start_date"],
#             "end_date": data["end_date"]
#         }
        
#         self.calc_seniority()

#     def calc_seniority(self):
#         """Calculates the different seniority dates for compensation calculations
#         """
#         start_date_dt = date.fromisoformat(self.seniority["start_date"])
#         end_date_dt = date.fromisoformat(self.seniority["end_date"])
#         worked_days = (end_date_dt - start_date_dt).days

#         years = math.floor(worked_days/365)
#         months = math.floor((worked_days - (years * 365)) / 30)
#         days = (worked_days - ((years * 365) + (months * 30)))

#         days_last_year = (end_date_dt - date.fromisoformat(f"{end_date_dt.year}-01-01")).days

#         self.seniority.update({"total_days_worked": worked_days})
#         self.seniority.update({"years_worked" : years})
#         self.seniority.update({"months_worked": months})
#         self.seniority.update({"days_worked": days})
#         self.seniority.update({"days_worked_end_year": days_last_year})

#     def validate(self, data):
#         '''
#         Validate the input parameters
#         '''

#         # salary is a number greater than zero
#         assert "salary" in data, "Salary was not provided!"  
#         assert isinstance(data["salary"], numbers.Number), "Salary is not a number!"
#         assert data["salary"] > 0, "Salary must be higher than zero!"

#         # motif must be either "resignation" or "dismisal"
#         assert "motif" in data, "Motif was not provided!"  
#         assert data["motif"] in ("resignation", "dismisal"), "Must insert a valid motif!"

#         # start date and end date must be provided
#         assert "start_date" in data, "Start date was not provided!" 
#         assert "end_date" in data, "End date was not provided!"

#         # end date must be more recent that start date
#         assert data["end_date"] > data["start_date"], "End date must be more recent than start date!"
        
#         # start date must have a valid format
#         try:
#             date.fromisoformat(data["start_date"])
#         except Exception as e:
#             raise ValueError("Start date is not a valid date. Required format: YYYY-MM-DD")
#         # end date must have a valida format
#         try:
#             date.fromisoformat(data["end_date"])
#         except Exception as e:
#             raise ValueError("End date is not a valid date. Required format: YYYY-MM-DD")

#     def comp_worked_days_resignation_month(self):
#         self.salary_accrued = round((self.salary / 30) * self.seniority["days_worked"])
            
#     def comp_vac_prop(self):
#         vac_salary = self.salary / 25
#         if self.seniority["years_worked"] < 5:
#             self.vac_prop = round((14 * (self.seniority["days_worked"]/365)) * vac_salary)
#         elif years >= 5 and years <10:
#             self.vac_prop = round((21 *  (self.seniority["days_worked"]/365)) * vac_salary)
#         elif years >= 10 and years <20:
#             self.vac_prop = round((28 *  (self.seniority["days_worked"]/365)) * vac_salary)
#         else:
#             self.vac_prop = round((35 *  (self.seniority["days_worked"]/365)) * vac_salary)

#     def comp_sup_salary(self):
#         if self.seniority["days_worked"] > 180:
#             x = self.seniority["days_worked"] - 180
#         else:
#             x = self.seniority["days_worked"]
            
#         self.prop_sup_salary_accrued = round((x / 180) * (self.salary / 2))
    
#     def comp_for_seniority(self):
#         years_worked = self.seniority["years_worked"]
#         if self.seniority["months_worked"] > 3:
#             years_worked += 1
#         self.comp_seniority = years_worked * self.salary
    
#     def comp_adv_notice(self):
#         years_worked = self.seniority["years_worked"]
#         if self.seniority["years_worked"] == 0 and self.seniority["months_worked"] > 3:
#             years_worked += 1
#             self.adv_notice_pay = self.salary
#         else:
#             self.adv_notice_pay = self.salary * 2

#     def comp_calc_dismisal_month_salary_int(self):
#         self.salary_dis_int = round((30  - self.seniority["days_worked"]) * (self.salary/30))
    
#     def calculate_compensation(self):
#         """Calculate total compensation
#         """
#         if self.motif == "resignation":
#             self.comp_worked_days_resignation_month()
#             self.comp_sup_salary()
#             self.comp_vac_prop()
#             self.comp = (
#                 self.salary_accrued
#                 + self.prop_sup_salary_accrued
#                 + self.vac_prop
#             )
            
#         elif self.motif == "dismisal":
#             self.comp_worked_days_resignation_month()
#             self.comp_sup_salary()
#             self.comp_vac_prop()
#             self.comp_for_seniority()
#             self.comp_adv_notice()
#             self.comp_calc_dismisal_month_salary_int()
#             self.comp =  (
#                 self.salary_accrued
#                 + self.prop_sup_salary_accrued
#                 + self.vac_prop
#                 + self.comp_seniority
#                 + self.adv_notice_pay
#                 + self.salary_dis_int
#             )
            
#     def display(self):
#         """Display calculations
#         """
#         if self.motif == "dismisal":
#             print(
#                 f"Seniority:\tYears: {self.seniority['years_worked']}, Months: {self.seniority['months_worked']}, Days: {self.seniority['days_worked']}\n\n"
#                 f"Compensation for days worked in last working month:\t{self.salary_accrued}\n"
#                 f"Proportional Suplementary Salary Comepensation:\t\t{self.prop_sup_salary_accrued}\n"
#                 f"Proportional Vacations Salary Compensation:\t\t{self.vac_prop}\n"
#                 f"Dismisal Salary Integration Compensation:\t\t{self.salary_dis_int}\n"
#                 f"Advance Notice Compensation:\t\t\t\t{self.adv_notice_pay}\n"
#                 f"Seniority Compensation:\t\t\t\t\t{self.comp_seniority}\n"
#                 f"{' ' * 56 + '-' * 6}\n"
#                 f"Total Compensation Payment:\t\t\t\t{self.comp}"
#             )
#         else:
#             print(
#                 f"Seniority:\tYears: {self.seniority['years_worked']}, Months: {self.seniority['months_worked']}, Days: {self.seniority['days_worked']}\n\n"
#                 f"Compensation for days worked in last working month:\t{self.salary_accrued}\n"
#                 f"Proportional Suplementary Salary Comepensation:\t\t{self.prop_sup_salary_accrued}\n"
#                 f"Proportional Vacations Salary Compensation:\t\t{self.vac_prop}\n"
#                 f"{' ' * 56 + '-' * 5}\n"
#                 f"Total Compensation Payment:\t\t\t\t{self.comp}"
#             )
       


# #     