package main
import "net/http"

func main() {

	http.HandleFunc("/contact", contactHandler)
	http.ListenAndServe(":matthiasmarinvargas.xyz", nil)
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("contact page!"))
}