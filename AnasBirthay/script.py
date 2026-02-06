import pywhatkit
import datetime
import time

# -----------------------------
# CONFIGURATION
# -----------------------------

numero = "+33XXXXXXXXX"  
lien = "https://happybirthdayanass.netlify.app/"  
date_envoi = datetime.datetime(2026, 2, 8, 8, 0)  # AAAA, MM, JJ, HH, MM

# -----------------------------
# CALCUL DU TEMPS RESTANT
# -----------------------------

maintenant = datetime.datetime.now()
attente = (date_envoi - maintenant).total_seconds()

if attente > 0:
    print(f"Envoi programmé dans {attente/60:.1f} minutes...")
    time.sleep(attente)

# -----------------------------
# ENVOI DU MESSAGE
# -----------------------------

pywhatkit.sendwhatmsg_instantly(numero, lien)
print("Lien envoyé !")
