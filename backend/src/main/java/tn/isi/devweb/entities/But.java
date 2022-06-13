package tn.isi.devweb.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "but")
public class But {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  Long id;

    @ManyToOne
    @JoinColumn(name = "id_match")
    private Match match;

    @ManyToOne
    @JoinColumn(name = "id_equipe")
    private Equipe equipe;
   // @ManyToOne
   // @JoinColumn(name = "id_joeur")
   // private Joeur id_joeur;
   @Column(name = "minute")
   //private DateFormat minute = new SimpleDateFormat("HH:mm a");

  private String  minute;
}
