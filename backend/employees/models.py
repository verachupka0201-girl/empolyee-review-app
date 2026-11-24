from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Employee(models.Model):
    first_name = models.CharField(
        max_length = 100,
        verbose_name = "Имя"
    )

    last_name = models.CharField(
        max_length = 100,
        verbose_name = "Фамилия"
    ) 

    position = models.CharField(
        max_length = 150,
        verbose_name = "Должность"
    )

    email = models.EmailField(
        unique = True,
        verbose_name = "Электронная почта"
    )

    created_at = models.DateTimeField(
        auto_now_add = True,
        verbose_name = "Дата добавления"
    )

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta: 
        verbose_name = "Сотрудник"
        verbose_name_plural = "Сотрудники"    

class Review(models.Model):
    employee = models.ForeignKey(
        Employee,
        on_delete=models.CASCADE,
        related_name="reviews",
        verbose_name="Сотрудник"
    )
    
    reviewer = models.ForeignKey(
    Employee,
    on_delete=models.SET_NULL,
    null=True,
    blank=True,
    related_name="given_reviews",
    verbose_name="Кто оценил"
    )
    
    review_date = models.DateField(
    verbose_name="Дата оценки"
    )
    
    soft_skills_score = models.PositiveSmallIntegerField(
    validators=[
        MinValueValidator(1),
        MaxValueValidator(10),
    ],
    verbose_name="Оценка Soft Skills"
    )
    
    hard_skills_score = models.PositiveSmallIntegerField(
         validators=[
                MinValueValidator(1),
                MaxValueValidator(10),
            ],
    verbose_name="Оценка Hard Skills"
    )
    
    comment = models.TextField(
    blank=True,
    verbose_name="Комментарий"
    )
    
    created_at = models.DateTimeField(
    auto_now_add=True,
    verbose_name="Дата создания"
    )
# Create your models here.
