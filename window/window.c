#include <gtk/gtk.h>

static void destroy(GtkWidget *widget, gpointer data) { gtk_main_quit(); }

int main(int argc, char *argv[]) {

  gtk_init(&argc, &argv);

  GtkWidget *window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  gtk_window_set_title(GTK_WINDOW(window), "Simple Window");
  gtk_window_set_default_size(GTK_WINDOW(window), 300, 200);
  g_signal_connect(window, "destroy", G_CALLBACK(destroy), NULL);

  // Display all elements
  gtk_widget_show_all(window);

  gtk_main();

  return 0;
}
