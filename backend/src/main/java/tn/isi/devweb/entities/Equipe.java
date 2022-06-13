package tn.isi.devweb.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;


import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "equipe")
public class Equipe {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "nom")
    private String nom;

   /* @OneToMany(cascade = CascadeType.ALL, mappedBy = "equipe")
    //@JoinColumn(name = "joeur_id")
    private List<Joeur> joeur;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "id_equipe")
    private List<But> but;*/

    @ManyToOne
    @JoinColumn(name = "id_pool")
    private Pool pool;

   // @ManyToOne
  //  @JoinColumn(name = "id_match")
  //  private Match match;

    @Value("${some.key:0}")
   @Column(name = "score")
   private  int score;

    @ManyToMany
    private List<Rencontre> rencontres;




}
