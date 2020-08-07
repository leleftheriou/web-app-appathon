## web-app-appathon

### Περιγραφή της Ιδέας 
<hr>

<p>Η βάση μου θα περιέχει ένα dataset το οποιό θα έχει τοποθεσίες (πόλη,δήμος,διεύθηνση,πληροφορίες) που θα προτείνονται για τρέξιμο/περπάτημα.
Για κάθε μέρος θα αναφέρονται τα καιρικά φαινόμενα (θερμοκρασία,συνολική εικόνα του καιρού).</p>

<p>Τα στοιχεία τα οποία αφορούν τον καιρό και θα συλλέγονται απο το παρακάτω web service (Current Weather Data) [Weather API](https://openweathermap.org/api) .</p>

<p>O χρήστης στο Front End θα έχει την δυνατότητα επιλογής (πόλης,δήμος) θα κάνει search και το Back End θα παίρνει τo query και θα του επιστρεφει την αντιστοίχηση των επιλογών του χρήστη για να δει το καιρό και πληροφορίες για τα μέρη που προτείνονται.</p>

### Τεχνολογίες
<hr>

Front-End ( Js, HTML, CSS )
Back-End ( Nodejs )
Database( MongoDB )

### Documentation
<hr>

<p>Για να τρέξει η εφαρμογή χρειάζεται να εγκαταστήσουμε το <b>Nodejs</b> , το <b>npm</b> και την <b>MongoDB</b>.

Αρχικά κατεβάζουμε την MongoDB απο τον παρακάτω σύνδεσμο [MongoDB Download](https://www.mongodb.com/try/download/enterprise) και την εγκαθιστούμε.</p>

<p>Έπειτα κατεβάζουμε κάποια επιπλέον tools απο τον παρακάτω σύνδεσμο <a  href='https://docs.mongodb.com/database-tools/installation/#install-tools'>Mongo Tools Download </a> 
  για να μπορέσουμε να κάνουμε import την βάση μας απο το <i> txt </i> που την έχουμε.Ανοίγουμε τα tools που κατεβάσαμε και αντιγράφουμε ότι έχει μέσα στο φάκελο bin για να το κάνουμε επικόλληση στον φάκελο bin της MongoDB που εγκαταστήσαμε προηγουμένως.</p>
</p>Μόλις το κάνουμε ανοίγουμε το terminal στον path που είμαστε μέσα στο bin έχωντας πρώτα κάνει clone το το project για να ξέρουμε σε ποιό Path είναι αποθηκευμένο το <i>txt</i>αρχείο που είναι και η βάση που έχουμε δημιουργήσει.
Πληκτρολογούμε την παρακάτω εντολή στον terminal που ανοίξαμε.</p>

`mongoimport --db appathonDB --collection locations --type csv  --file  {path}\appathonDB.txt --headerline`

<p>Τώρα είμαστε έτοιμοι να εγκαταστήσουμε το nodejs απο τον παρακάτω σύνδεσμο <a href=https://nodejs.org/en/download>Nodejs Download </a> . 

Μόλις το εγκαταστήσουμε  ανοίγουμε ενα terminal ως διαχειριστές μεσα στο φάκελο της εφαρμογής και εγκαθιστούμε το npm με την εντολή `npm install` .

Τέλος πατάμε την παρακάτω εντολη για να εγκαταστήσουμε τα υπόλοιπα packages και είμαστε έτοιμοι να ξεκινήσουμε τον server μας.</p>

`npm install express body-parser ejs mongoose`

<p>Για να ξεκινήσουμε τον server με node παταμε `node app.js` στον terminal έχωντας μπεί μέσα στον φάκελο του project.
Έχουμε σηκώσει τον server μας στην localhost στο port 3000 και είμαστε έτοιμοι να χρησιμοποιήσουμε την εφαρμογή πληκτρολογώντας
σε έναν browser τον σύνδεσμο <b>localhost/3000 </b> ή <b> 127.0.0.1:3000 </b>.</p>

