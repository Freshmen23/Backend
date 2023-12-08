from django.db import models
import json

# Create your models here.
class Review(models.Model):
    #Details of professor
    name = models.CharField(max_length=50)
    subject = models.CharField(max_length=50)

    #Review count
    count = models.IntegerField(default=0)

    #Teaching qualities
    teaching = models.IntegerField()
    evaluation = models.IntegerField()
    behavior = models.IntegerField()
    internals = models.IntegerField()
    class_average_marks = models.CharField(max_length=10)

    serialized_array = models.TextField(blank=True)

    def save_array(self, array_data):
        # Serialize the array to JSON before saving to the field
        serialized_data = json.dumps(array_data)
        self.serialized_array = serialized_data
        self.save()

    def get_array(self):
        # Deserialize the JSON data back to an array
        if self.serialized_array:
            return json.loads(self.serialized_array)
        return None

    #overall rating
    overall = models.CharField(max_length=20)

    #Description of prof in brief
    desc = models.TextField(max_length=1000, null=True)
    color = models.CharField(max_length=20)


    def __str__(self):
        return f"Review #{self.name} - Overall: {self.overall}"
    
