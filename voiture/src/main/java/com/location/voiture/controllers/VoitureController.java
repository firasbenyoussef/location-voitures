package com.location.voiture.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.location.voiture.DTO.VoitureDTO;
import com.location.voiture.services.VoitureService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/voiture")
public class VoitureController 
{
	@Autowired
	VoitureService voitureService;
	@GetMapping("/getAll")
	public ResponseEntity<List<VoitureDTO>> getAll()
	{
		return ResponseEntity.ok(voitureService.getAll());
	}
	@GetMapping("/getDisponnible")
	public ResponseEntity<List<VoitureDTO>> getDisponnible()
	{
		return ResponseEntity.ok(voitureService.findDisponnible());
	}
	@GetMapping("/getOccupe")
	public ResponseEntity<List<VoitureDTO>> getOccupe()
	{
		return ResponseEntity.ok(voitureService.findOccupe());
	}
	@PostMapping("/saveOne")
	public ResponseEntity<String> saveVoiture(@RequestBody VoitureDTO voiture)
	{
		return ResponseEntity.ok(voitureService.addVoiture(voiture));
	}
}
