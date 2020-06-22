package com.location.voiture.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="VOITURE")
@Data
public class Voiture 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long idVoiture;
	private String matricule;
	private String marque;
	private String couleur;
	private Boolean disponibilite;
}
