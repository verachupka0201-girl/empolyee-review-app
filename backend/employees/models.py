from django.db import models

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
# Create your models here.
