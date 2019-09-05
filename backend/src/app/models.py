from django.db import models

from django.utils import timezone

class Article(models.Model):

    title = models.CharField(max_length=20)
    description_img_url = models.TextField(default='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png')
    description = models.TextField(default='The project description')
    content = models.TextField(default='The project content')

    createDate = models.DateTimeField('create time', auto_now_add=timezone.now)

    articleType = (
        ('pc', 'post content'),
        ('pd', 'project description'),
    )

    type = models.CharField(max_length=20, choices=articleType, default='pc')

    def __str__(self):
        return self.title
