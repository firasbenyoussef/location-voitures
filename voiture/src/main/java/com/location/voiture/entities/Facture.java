package com.location.voiture.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table
@Data
public class Facture 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String codeFacture;
	private Date dateFacture;
	private Date dateDebutLocation;
	private Date dateFinLocation;
	@ManyToOne
	@JoinColumn(name="ID_VOITURE")
	private Voiture voiture;
	@ManyToOne
	@JoinColumn(name="ID_CLIENT")
	private Client client;
	
	
}
