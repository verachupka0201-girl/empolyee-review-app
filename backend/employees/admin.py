from django.contrib import admin
from .models import Employee, Review

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'first_name',
        'last_name',
        'position',
        'email',
        'created_at',
    )

    search_fields = (
        'first_name',
        'last_name',
        'email',
    )

    list_filter = ('position',)

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'employee',
        'reviewer',
        'review_date',
        'soft_skills_score',
        'hard_skills_score',
    )

    list_filter = (
        'review_date',
    )

    search_fields = (
        'employee__first_name',
        'employee__last_name',
    )    
# Register your models here.
