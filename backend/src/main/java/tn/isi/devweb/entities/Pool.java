package tn.isi.devweb.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pool")
public class Pool implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_pool;
    @Column(name = "name")
    private String name;

   // @OneToMany(cascade = CascadeType.ALL, mappedBy = "pool")
  //  private List<Equipe> equipe;


}
