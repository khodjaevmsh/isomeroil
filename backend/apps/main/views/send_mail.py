import json
import logging

from django.http import JsonResponse
from django.template.loader import render_to_string
from django.core.mail import EmailMessage
from django.views.decorators.csrf import csrf_exempt

from config import settings

logger = logging.getLogger(__name__)


def send_email(html_template, context):
    from_email = 'khodjaevmsh@gmail.com'  # Your email address
    subject = context.get('subject')
    to_email = context.get('to_email')

    if not to_email:
        raise ValueError("The 'to_email' address must be provided and cannot be empty.")
    elif not isinstance(to_email, list):
        to_email = [to_email]

    try:
        html_message = render_to_string(html_template, context)
        message = EmailMessage(
            subject=subject,
            body=html_message,
            from_email=from_email,
            to=to_email,
        )
        message.content_subtype = 'html'
        result = message.send()
        logger.info(f"Sending email to {', '.join(to_email)} with subject: {subject} - Status {result}")
    except Exception as e:
        logger.info(f"Sending email to {', '.join(to_email)} with subject: {subject} - Status 0")
        logger.exception(e)


@csrf_exempt
def send_test_email(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        phone = data.get('phone')

        if not name or not phone:
            return JsonResponse({'error': 'Name and phone are required'}, status=400)

        template = 'main/mail.html'
        context = {
            'subject': f"Новая заявка от {name}",
            'to_email': 'mymoodlab@gmail.com',
            'name': name,
            'phone': phone,
        }
        send_email(template, context)

        return JsonResponse({'message': 'Email sent successfully!'}, status=200)
