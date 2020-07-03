from rest_framework import serializers
from rest_api.models import *

class AppSerialzer(serializers.ModelSerializer):
    author=serializers.SlugRelatedField(slug_field="name",read_only=True)
    institution = serializers.CharField(source='author.institution.name',read_only=True)
    class Meta:
        model = ApplicationEntry
        fields = [
            'id',
            'author',
            'data',
            'status',
            'institution',
            'time',
            'edit_time',
            'institution'
        ]

class AppReviewSerializer(serializers.ModelSerializer):
    reviewer = serializers.SlugRelatedField(slug_field="name", read_only=True)
    class Meta:
        model = Review
        fields = [
            'reviewer',
            'comment',
            'passed',
            'round',
            'time'
            ]
